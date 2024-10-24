/* eslint-disable no-unused-vars */
import { RouteObject } from 'react-router-dom';

// import CategoryInsert from './screens/CategoryInsertScreen';
import CategoryScreen from './screens/CategoryScreens';

export enum CategoryRoutesEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryScreenRoutes: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <CategoryScreen />,
  },
  // {
  //   path: categoryRoutesEnum.CATEGORY_INSERT,
  //   element: <CategoryInsert />,
  // },
];
