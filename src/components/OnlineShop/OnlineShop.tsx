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

  constructor(products?: IProductsData[]) {
    super();
    this.products = products;
  }

  addToCart(product: IProductsData) {
    this.products?.push(product);
  }

  removeFromCart() {}
  countTotalPrice() {}
  checkoutCartConditions(): boolean {
    const isDeliverySelected = this.userAddress || this.shopId;
    return Boolean(isDeliverySelected && this.products);
  }
}

const order = new Cart(PRODUCTS_DATA);
// console.log();
order.homeDelivery('12.10.2022', 'Cherkasy');
// order.selfDelivery(2);
console.log(order.checkoutCartConditions());
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
