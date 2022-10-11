import { useState } from 'react';

const PRODUCTS_DATA = [
  { id: 1, name: 'keyboard', price: 80 },
  { id: 2, name: 'mouse', price: 120 },
  { id: 3, name: 'gamepad', price: 80 },
  { id: 4, name: 'RAM', price: 100 },
  { id: 5, name: 'display', price: 700 },
  { id: 6, name: 'motherboard', price: 200 },
  { id: 7, name: 'GPU', price: 1000 },
];

interface IProductsData {
  id: number;
  name: string;
  price: number;
}

const ProductsList = () => {
  const [productsData, setProductsData] =
    useState<IProductsData[]>(PRODUCTS_DATA);

  // const handle

  return (
    <div className="wrapper">
      {productsData ? (
        productsData.map(({ id, name, price }) => {
          return (
            <div key={id}>
              <h5>{name}</h5>
              <h6>{price}</h6>
              <button type="button">Add to cart</button>
            </div>
          );
        })
      ) : (
        <h1>Something went wrong</h1>
      )}
    </div>
  );
};

export default ProductsList;
