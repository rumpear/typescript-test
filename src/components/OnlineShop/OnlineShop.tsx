import { Component } from 'react';
import { CartView } from './CartView';
import { ProductsList } from './ProductsList';
import { Delivery } from './Delivery';
import { SuccessMessage } from './SuccessMessage';
import { DELIVERY_OPTIONS, PRODUCTS_DATA, SHOP_LIST } from './data';
import { IProductsData, IShopId } from './types';
import s from './OnlineShop.module.css';

interface IStateOnlineShop {
  productsData: IProductsData[];
  date: string;
  userAddress: string;
  shopId: IShopId | null;
  totalPrice: number;
  isDeliveryReady: boolean;
  isOrderReady: boolean;
}

class OnlineShop extends Component<{}, IStateOnlineShop> {
  state: IStateOnlineShop = {
    productsData: [],
    date: '',
    userAddress: '',
    shopId: null,
    totalPrice: 0,
    isDeliveryReady: false,
    isOrderReady: false,
  };

  componentDidUpdate(_: never, prevState: IStateOnlineShop) {
    const totalPrice = this.countTotalPrice();
    if (prevState.totalPrice !== totalPrice) {
      this.setState({ totalPrice });
    }
  }

  addToCart = (id: number): void => {
    const initProduct = this.state.productsData.find(
      (product: IProductsData) => id === product.id,
    );

    if (!initProduct) {
      const newProduct = PRODUCTS_DATA.find(
        (product: IProductsData) => id === product.id,
      );

      if (newProduct) {
        return this.setState({
          productsData: [
            ...this.state.productsData,
            { ...newProduct, quantity: 1 },
          ],
        });
      }
    }

    const productList = this.state.productsData.map(product => {
      const isProductSelected = product.id === id;
      const updatedProduct = {
        ...product,
        quantity: product.quantity + 1,
      };

      return isProductSelected ? updatedProduct : product;
    });

    this.setState({ productsData: productList });
  };

  removeFromCart = (id: number): void => {
    const filteredData = this.state.productsData.filter(
      (product: IProductsData) => product.id !== id,
    );

    this.setState({ productsData: filteredData });
  };

  countTotalPrice = (): number => {
    const totalPrice = this.state.productsData.reduce(
      (prev: number, product: IProductsData) => {
        return product.price * product.quantity + prev;
      },
      0,
    );

    return totalPrice;
  };

  incrementQuantity = (id: number): void => {
    const incrementedProducts = this.state.productsData.map(
      (product: IProductsData) => {
        const isIdMatch = product.id === id;

        return isIdMatch
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      },
    );

    this.setState({ productsData: incrementedProducts });
  };

  decrementQuantity = (id: number): void => {
    const decrementedProducts = this.state.productsData.map(
      (product: IProductsData) => {
        const isIdMatch = product.id === id;
        const isQuantityGreaterThanZero = product.quantity > 0;

        return isIdMatch && isQuantityGreaterThanZero
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      },
    );

    const filteredProducts = decrementedProducts.filter(
      (products: IProductsData) => products.quantity > 0,
    );
    this.setState({ productsData: filteredProducts });
  };

  setDeliveryStatus = (status: boolean): void => {
    this.setState({ isDeliveryReady: status });
  };

  setOrderStatus = (status: boolean): void => {
    this.setState({ isOrderReady: status });
  };

  checkoutCartConditions = (): boolean => {
    const isDeliverySelected = this.state.userAddress || this.state.shopId;
    const isProductsDataExist = this.state.productsData.length;
    return Boolean(isDeliverySelected && isProductsDataExist);
  };

  makeOrder = (value: string | IShopId): void => {
    const date = new Date().toISOString();

    this.setState({ date });

    if (typeof value === 'string') {
      return this.setState({ userAddress: value, shopId: null });
    }

    this.setState({ shopId: value, userAddress: '' });
  };

  render() {
    const {
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      setDeliveryStatus,
      setOrderStatus,
      makeOrder,
      checkoutCartConditions,
    } = this;

    const {
      productsData,
      totalPrice,
      isDeliveryReady,
      isOrderReady,
      userAddress,
      date,
      shopId,
    } = this.state;

    const isCartCheckedSuccessfully = checkoutCartConditions();

    return (
      <>
        <div className={s.wrapper}>
          <ProductsList products={PRODUCTS_DATA} addToCart={addToCart} />
        </div>

        <CartView
          products={productsData}
          totalPrice={totalPrice}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeFromCart={removeFromCart}
          setDeliveryStatus={setDeliveryStatus}
          isDeliveryReady={isDeliveryReady}
        />

        {isDeliveryReady && (
          <Delivery
            shopList={SHOP_LIST}
            deliveryOptions={DELIVERY_OPTIONS}
            makeOrder={makeOrder}
            setOrderStatus={setOrderStatus}
          />
        )}

        {isOrderReady && isCartCheckedSuccessfully && (
          <SuccessMessage
            userAddress={userAddress}
            shopAddress={shopId?.address}
            totalPrice={totalPrice}
            date={date}
          />
        )}
      </>
    );
  }
}

export default OnlineShop;
