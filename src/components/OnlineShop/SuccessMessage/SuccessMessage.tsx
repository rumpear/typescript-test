import s from './SuccessMessage.module.css';

interface IPropsSuccessMessage {
  userAddress?: string;
  shopAddress?: string;
  totalPrice: number;
  date: string;
}

const SuccessMessage = ({
  userAddress,
  shopAddress,
  totalPrice,
  date,
}: IPropsSuccessMessage) => {
  return (
    <div className={s.wrapper}>
      {!!userAddress && (
        <h6>Delivery will arrive on this address: {userAddress}</h6>
      )}
      {!!shopAddress && (
        <h6>You can receive your order at the shop in {shopAddress}</h6>
      )}
      {!!totalPrice && <h6>You must pay {totalPrice}$</h6>}
      {!!date && <h6>Order time: {date}</h6>}
    </div>
  );
};

export default SuccessMessage;
