import { useState, useEffect } from 'react';
import { IProductsData } from '../types';

interface IProps {
  removeFromCart: (id: number) => void;
  products: IProductsData[];
}

const CartView = ({ products, removeFromCart }: IProps) => {
  console.log(products, 'products');
  const [productsData, setProductsData] = useState<IProductsData[]>(products);
  console.log(productsData, 'CartView productsData');

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  return (
    <>
      {productsData.length ? (
        <>
          <h1>In cart</h1>
          {productsData.map(({ id, name, price }) => {
            return (
              <div key={id}>
                <h5>{name}</h5>
                <h6>{price}</h6>
                {/* <button type="button" onClick={() => handleAddProduct(id)}>
                  Add to cart
                </button> */}

                {/* <button type="button" onClick={handleAddProduct}>
                Remove from cart
              </button> */}
              </div>
            );
          })}
        </>
      ) : (
        <h1>Nothing in cart</h1>
      )}
    </>
  );
};

export default CartView;
