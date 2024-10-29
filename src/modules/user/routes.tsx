/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import UserInsert from './screens/UserInsertScreen';
import UserScreen from './screens/UserScreen';

export enum UserRoutesEnum {
  USER = '/user',
  USER_INSERT = '/user/insert',
}

export const userScreenRoutes: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <UserScreen />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <UserInsert />,
  },
];
