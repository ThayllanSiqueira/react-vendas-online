/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import ProductInsert from './screens/ProductInsertScreen';
import ProductScreen from './screens/ProductScreen';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
}

export const productScreenRoutes: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductScreen />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
];
