/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';
import PageNotFound from './screens/PageNotFound';

export enum FirstScreenRoutesEnum {
  FIRSTSCREEN = '/',
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRSTSCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
