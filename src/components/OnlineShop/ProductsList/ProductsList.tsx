import { useState } from 'react';

interface IProductsData {
  id: number;
  name: string;
  price: number;
}

interface IProps {
  products: IProductsData[];
  addToCart: (id: number) => void;
}

const ProductsList = ({ products, addToCart }: IProps) => {
  const [productsData, setProductsData] = useState<IProductsData[]>(products);

  const handleAddProduct = (id: number): void => {
    addToCart(id);
  };

  return (
    <div className="wrapper">
      {productsData ? (
        productsData.map(({ id, name, price }) => {
          return (
            <div key={id}>
              <h5>{name}</h5>
              <h6>{price}</h6>
              <button type="button" onClick={() => handleAddProduct(id)}>
                Add to cart
              </button>

              {/* <button type="button" onClick={handleAddProduct}>
                Remove from cart
              </button> */}
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
