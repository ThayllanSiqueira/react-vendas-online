import { createContext, useContext, useState } from 'react';

import { ProductType } from '../../modules/product/types/ProductType';

interface DataContextProtocol {
  products?: ProductType[];
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

  return {
    products: data?.products || [],
    setProducts,
  };
};
