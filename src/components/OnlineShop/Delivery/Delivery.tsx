import { useState } from 'react';
import { IDeliveryOptions, IShopId } from '../types';

interface IPropsDelivery {
  shopList: IShopId[];
  deliveryOptions: IDeliveryOptions[];
  makeOrder: (type: any, value: any) => void;
}

const Delivery = ({ shopList, deliveryOptions, makeOrder }: IPropsDelivery) => {
  const [deliveryType, setDeliveryType] = useState<IDeliveryOptions>(
    deliveryOptions[0],
  );
  const [homeAddress, setHomeAddress] = useState<string>('');
  const [shopAddress, setShopAddress] = useState<IShopId>(shopList[0]);

  console.log(deliveryType, 'deliveryType');

  const homeDelivery = deliveryType.id === 0;
  const selfDelivery = deliveryType.id === 1;

  const handleDeliveryOptionsSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = e.target;
    const selectedDelivery = deliveryOptions[+value];

    setDeliveryType(selectedDelivery);
  };

  const handleInputAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setHomeAddress(value);
    makeOrder(deliveryType.label, homeAddress);
  };

  const handleShopAddressSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const currentShop = shopList[+value];
    setShopAddress(currentShop);
  };

  const handleOrderSubmit = () => {};

  return (
    <>
      <h1>Chose delivery options</h1>
      <select name="deliveryOptions" onChange={handleDeliveryOptionsSelect}>
        {deliveryOptions.length &&
          deliveryOptions.map(({ id, label }) => {
            return (
              <option key={id} value={id}>
                {label} delivery
              </option>
            );
          })}
      </select>

      {homeDelivery && (
        <>
          <h6>Please enter your address</h6>
          <input
            type="text"
            value={homeAddress}
            onChange={handleInputAddressChange}
          />
        </>
      )}
      {selfDelivery && (
        <>
          <h5>Shop addresses</h5>
          <select name="selfDelivery" onChange={handleShopAddressSelect}>
            {shopList.map(({ id, address }) => {
              return (
                <option key={id} value={id}>
                  {address}
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
};

export default Delivery;
