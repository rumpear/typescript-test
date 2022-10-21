import { Controls } from '../../Counter/Controls';
import { IProductsData } from '../types';
import s from './CartView.module.css';

interface IProps {
  products: IProductsData[];
  totalPrice: number;
  isDeliveryReady: boolean;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  setDeliveryStatus: (status: boolean) => void;
}

const CartView = ({
  products,
  totalPrice,
  isDeliveryReady,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setDeliveryStatus,
}: IProps) => {
  const handleOrderStatusToggle = (): void => {
    setDeliveryStatus(!isDeliveryReady);
  };

  return (
    <>
      <h1 className={s.title}>In cart</h1>
      {products.length ? (
        <>
          <div className={s.wrapper}>
            {products.map(({ id, name, price, quantity }) => {
              return (
                <div key={id} className={s.card}>
                  <h4>{name}</h4>
                  <h5>price: {price}$</h5>
                  <h6>quantity: {quantity}</h6>

                  <Controls
                    onIncrement={() => incrementQuantity(id)}
                    onDecrement={() => decrementQuantity(id)}
                  />

                  <button type="button" onClick={() => removeFromCart(id)}>
                    Remove from cart
                  </button>
                </div>
              );
            })}
          </div>
          {!!totalPrice && (
            <div>
              <h3 className={s.totalPrice}>Total price: {totalPrice}</h3>
              {!isDeliveryReady && (
                <button type="button" onClick={handleOrderStatusToggle}>
                  Make order
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <h2>Nothing in cart</h2>
      )}
    </>
  );
};

export default CartView;
