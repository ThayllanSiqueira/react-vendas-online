import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { useAppSelector } from '../../hooks';
import { setProductAction, setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products, product } = useAppSelector((state) => state.productReducer);

  const setProducts = (products: ProductType[]) => {
    dispatch(setProductsAction(products));
  };
  const setProduct = (product?: ProductType) => {
    dispatch(setProductAction(product));
  };

  return {
    products,
    product,
    setProducts,
    setProduct,
  };
};
