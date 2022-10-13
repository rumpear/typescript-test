import { Component } from 'react';
import { CartView } from './CartView';
import { ProductsList } from './ProductsList';
import { TShopId, IProductsData, IDelivery } from './types';

const PRODUCTS_DATA = [
  { id: 1, name: 'keyboard', price: 80 },
  { id: 2, name: 'mouse', price: 120 },
  { id: 3, name: 'gamepad', price: 80 },
  { id: 4, name: 'RAM', price: 100 },
  { id: 5, name: 'display', price: 700 },
  { id: 6, name: 'motherboard', price: 200 },
  { id: 7, name: 'GPU', price: 1000 },
];

class Delivery implements IDelivery {
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

// type TAddToCart = (id: number) => void;

class Cart extends Delivery {
  products!: IProductsData[];
  totalPrice?: number = 0;

  constructor(products?: IProductsData[]) {
    super();
    this.products = products ?? [];
  }

  addToCart(id: number) {
    const item = PRODUCTS_DATA.find(p => id === p.id);

    if (item) {
      this.products.push(item);
    }
  }

  removeFromCart(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  countTotalPrice() {
    this.totalPrice = this.products.reduce((prev, product) => {
      return prev + product.price;
    }, 0);
  }

  checkoutCartConditions() {
    const isDeliverySelected = this.userAddress || this.shopId;
    return Boolean(isDeliverySelected && this.products);
  }
}

// const order = new Cart();
// // order.homeDelivery('12.10.2022', 'Cherkasy');
// order.selfDelivery(4);
// console.log(order.checkoutCartConditions());

// order.addToCart(1);
// order.addToCart(3);
// order.addToCart(5);
// order.addToCart(6);

// order.removeFromCart(2);
// order.removeFromCart(6);
// order.removeFromCart(3);
// order.countTotalPrice();
// // console.log(order);
// console.log(console);

interface IProps {
  initialValue: number;
}

interface IState {
  productsData: IProductsData[];
  // cartData: IProductsData[];
  date: Date | string;
  userAddress: string;
  shopId: TShopId | null;
}

class OnlineShop extends Component {
  // <IProps, IState>
  state: IState = {
    productsData: [],
    // cartData: [],
    date: new Date(),
    userAddress: '',
    shopId: null,
  };

  addToCart = (id: number): void => {
    const product = PRODUCTS_DATA.find((p: IProductsData) => id === p.id);

    this.setState(prev => {
      return { ...prev, productsData: [...this.state.productsData, product] };
    });

    // const { setState, state } = this;
    // const product = PRODUCTS_DATA.find((p: IProductsData) => id === p.id);
    // setState(prev => {
    //   return { ...prev, productsData: [...state.productsData, product] };
    // });
  };

  removeFromCart(id: number) {
    const { productsData } = this.state;
    // const { state } = this;
    const filteredData = productsData.filter((p: IProductsData) => p.id !== id);
    // this.setState(prev => {
    //   return prev.this.state, {};
    //   // [...prev.state, ...filteredData];
    // });
    this.setState(prev => {
      console.log(prev);
      return { ...prev, ...filteredData };
    });
  }

  // countTotalPrice() {
  //   this.totalPrice = this.products.reduce((prev, product: IProductsData) => {
  //     return prev + product.price;
  //   }, 0);
  // }

  // checkoutCartConditions() {
  //   const isDeliverySelected = this.userAddress || this.shopId;
  //   return Boolean(isDeliverySelected && this.productsData);
  // }

  render() {
    const { addToCart, removeFromCart } = this;
    const { productsData } = this.state;
    console.log(productsData);

    return (
      <>
        <ProductsList products={PRODUCTS_DATA} addToCart={addToCart} />
        <CartView
        // removeFromCart={removeFromCart}
        />
      </>
    );
  }
}
// const foo = new OnlineShop({});
// foo.removeFromCart(1);
export default OnlineShop;
