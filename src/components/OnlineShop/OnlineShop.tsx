import { Component } from 'react';
import { CartView } from './CartView';
import { ProductsList } from './ProductsList';

const PRODUCTS_DATA = [
  { id: 1, name: 'keyboard', price: 80 },
  { id: 2, name: 'mouse', price: 120 },
  { id: 3, name: 'gamepad', price: 80 },
  { id: 4, name: 'RAM', price: 100 },
  { id: 5, name: 'display', price: 700 },
  { id: 6, name: 'motherboard', price: 200 },
  { id: 7, name: 'GPU', price: 1000 },
];

type TShopId = 1 | 2 | 3 | 4 | 5 | 6;

interface IProductsData {
  id: number;
  name: string;
  price: number;
}

class Delivery {
  date?: Date | string;
  userAddress?: string;
  shopId?: TShopId;

  homeDelivery(date: string, userAddress: string) {
    this.date = date;
    this.userAddress = userAddress;
  }

  selfDelivery(shopId: TShopId) {
    this.date = new Date();
    this.shopId = shopId;
  }
}

class Cart extends Delivery {
  products?: IProductsData[];
  totalPrice?: number;

  constructor(products?: IProductsData[]) {
    super();
    this.products = products ?? [];
  }

  addToCart(id: number) {
    const item = PRODUCTS_DATA.find(p => id === p.id);
    const isProductsExist = Array.isArray(this.products);

    // if (item && isProductsExist) {
    //   this.products.push(item);
    // }

    if (item && Array.isArray(this.products)) {
      this.products.push(item);
    }
  }

  removeFromCart(id: number) {
    if (Array.isArray(this.products)) {
      this.products = this.products.filter(p => p.id !== id);
    }
    // const updProducts = this.products.filter(p => p.id !== id);
    // console.log(updProducts, 'updProducts');
    // this.products = updProducts;
  }

  countTotalPrice() {
    if (Array.isArray(this.products)) {
      this.totalPrice = this.products.reduce((prev, product) => {
        return prev + product.price;
      }, 0);

      // this.products.reduce((prev, product) => {
      //   return prev + product.price;
      // }, 0);
    }
  }
  checkoutCartConditions(): boolean {
    const isDeliverySelected = this.userAddress || this.shopId;
    return Boolean(isDeliverySelected && this.products);
  }
}

const order = new Cart();
// console.log();
// order.homeDelivery('12.10.2022', 'Cherkasy');
order.selfDelivery(4);
console.log(order.checkoutCartConditions());
// order.addToCart({ id: 24, name: 'Cooler', price: 50 });

order.addToCart(1);
order.addToCart(3);
order.addToCart(5);
order.addToCart(6);

order.removeFromCart(2);
order.removeFromCart(6);
order.removeFromCart(3);
order.countTotalPrice();
console.log(order);

class OnlineShop extends Component {
  render() {
    return (
      <>
        <ProductsList />
        <CartView />
      </>
    );
  }
}

export default OnlineShop;
