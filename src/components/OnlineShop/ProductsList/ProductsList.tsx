import { IProductsData } from '../types';
import s from './ProductsList.module.css';

interface IProps {
  products: IProductsData[];
  addToCart: (id: number) => void;
}

const ProductsList = ({ products, addToCart }: IProps) => {
  const handleAddProduct = (id: number): void => {
    addToCart(id);
  };

  return (
    <div className={s.wrapper}>
      {products ? (
        products.map(({ id, name, price }) => {
          return (
            <div className={s.card} key={id}>
              <h5>{name}</h5>
              <h6>price {price}$</h6>
              <button type="button" onClick={() => handleAddProduct(id)}>
                Add to cart
              </button>
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
