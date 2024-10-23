/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import ProductScreen from './screens/ProductScreen';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
}

export const productScreenRoutes: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductScreen />,
  },
];
