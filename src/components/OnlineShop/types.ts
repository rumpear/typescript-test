export type TShopId = 1 | 2 | 3 | 4 | 5 | 6;

export interface IProductsData {
  id: number;
  name: string;
  price: number;
}

export interface IDelivery {
  date?: Date | string;
  userAddress?: string;
  shopId?: TShopId;

  homeDelivery: (date: string, userAddress: string) => void;
  selfDelivery: (shopId: TShopId) => void;
}
