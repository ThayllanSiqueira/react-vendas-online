/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

import CategoryInsert from './screens/CategoryInsertScreen';
import CategoryScreen from './screens/CategoryScreens';

export enum CategoryRoutesEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
  CATEGORY_EDIT = '/category/:categoryId',
}

export const categoryScreenRoutes: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <CategoryScreen />,
  },
  {
    path: CategoryRoutesEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
  },
  {
    path: CategoryRoutesEnum.CATEGORY_EDIT,
    element: <CategoryInsert />,
  },
];
