/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import UserScreen from './screens/UserScreen';

export enum UserRoutesEnum {
  USER = '/user',
}

export const userScreenRoutes: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <UserScreen />,
  },
];
