/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import OrderDetails from './screens/OrderDetailsScreen';
import OrderScreen from './screens/OrderScreen';

export enum OrderRoutesEnum {
  ORDER = '/order',
  ORDER_ID = '/order/id',
}

export const orderScreenRoutes: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <OrderScreen />,
  },
  {
    path: OrderRoutesEnum.ORDER_ID,
    element: <OrderDetails />,
  },
];
