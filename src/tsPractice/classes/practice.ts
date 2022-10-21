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

interface IDelivery {
  date?: Date | string;
  userAddress?: string;
  shopId?: TShopId;

  homeDelivery: (date: string, userAddress: string) => void;
  selfDelivery: (shopId: TShopId) => void;
}

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

type TAddToCart = (id: number) => void;

class Cart extends Delivery {
  products: IProductsData[] = [];
  totalPrice?: number = 0;

  constructor(products: IProductsData[] = []) {
    super();
    this.products = products;
  }

  addToCart(id: number) {
    const item = PRODUCTS_DATA.find((p: IProductsData) => id === p.id);

    if (item) {
      this.products.push(item);
    }
  }

  removeFromCart(id: number) {
    this.products = this.products.filter((p: IProductsData) => p.id !== id);
  }

  countTotalPrice() {
    this.totalPrice = this.products.reduce((prev, product: IProductsData) => {
      return prev + product.price;
    }, 0);
  }

  checkoutCartConditions() {
    const isDeliverySelected = this.userAddress || this.shopId;
    return Boolean(isDeliverySelected && this.products);
  }
}

const order = new Cart();
// order.homeDelivery('12.10.2022', 'Cherkasy');
order.selfDelivery(4);
console.log(order.checkoutCartConditions());

order.addToCart(1);
order.addToCart(3);
order.addToCart(5);
order.addToCart(6);

order.removeFromCart(2);
order.removeFromCart(6);
order.removeFromCart(3);
order.countTotalPrice();
console.log(order);

export {};
