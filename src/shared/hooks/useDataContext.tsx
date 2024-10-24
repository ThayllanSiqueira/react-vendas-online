import { createContext, useContext, useState } from 'react';

import { CategoryType } from '../types/CategoryType';
import { ProductType } from '../types/ProductType';

interface DataContextProtocol {
  products?: ProductType[];
  categories?: CategoryType[];
}

interface DataContextProps {
  data: DataContextProtocol;
  // eslint-disable-next-line no-unused-vars
  setData: (data: DataContextProtocol) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContextProtocol>({});
  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  const setCategories = (categories: CategoryType[]) => {
    setData({
      ...data,
      categories,
    });
  };

  return {
    products: data?.products || [],
    categories: data?.categories || [],
    setProducts,
    setCategories,
  };
};
