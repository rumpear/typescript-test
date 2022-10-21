import { useState } from 'react';
import { IDeliveryOptions, IShopId } from '../types';

interface IPropsDelivery {
  shopList: IShopId[];
  deliveryOptions: IDeliveryOptions[];
  makeOrder: (value: string | IShopId) => void;
  setOrderStatus: (status: boolean) => void;
}

const Delivery = ({
  shopList,
  deliveryOptions,
  setOrderStatus,
  makeOrder,
}: IPropsDelivery) => {
  const [initDeliveryOption] = deliveryOptions;
  const [initShop] = shopList;

  const [deliveryType, setDeliveryType] =
    useState<IDeliveryOptions>(initDeliveryOption);
  const [homeAddress, setHomeAddress] = useState<string>('');
  const [shopAddress, setShopAddress] = useState<IShopId | null>(initShop);

  const homeDelivery = deliveryType.id === 0;
  const selfDelivery = deliveryType.id === 1;

  const handleDeliveryOptionsSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { value } = e.target;
    const selectedDelivery = deliveryOptions[+value];

    setDeliveryType(selectedDelivery);
    setOrderStatus(false);
  };

  const handleInputAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = e.target;
    setHomeAddress(value);
  };

  const handleShopAddressSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { value } = e.target;
    const currentShop = shopList[+value];
    setShopAddress(currentShop);
  };

  const handleOrderSubmit = (): void => {
    setOrderStatus(true);

    if (shopAddress && deliveryType.label === 'self') {
      return makeOrder(shopAddress);
    }

    if (!homeAddress) {
      return alert('Add your home address');
    }

    if (deliveryType.label === 'home') {
      return makeOrder(homeAddress);
    }
  };

  return (
    <>
      <h3>Chose delivery options</h3>
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
          <button type="submit" onClick={handleOrderSubmit}>
            Submit
          </button>
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
          <button type="submit" onClick={handleOrderSubmit}>
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default Delivery;
