import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRoutesEnum } from '../routes';

export const useProduct = () => {
  const [productIdDelete, setProductIdDelete] = useState<number | undefined>();
  const { products, setProducts } = useProductReducer();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const dataWithKeys = productsFiltered.map((product) => ({
    ...product,
    key: product.id,
  }));

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.includes(value))]);
    }
  };

  const handleDeleteProduct = async () => {
    await request(URL_PRODUCT_ID.replace('{productId}', `${productIdDelete}`), MethodsEnum.DELETE);
    await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
    setProductIdDelete(undefined);
  };

  const handleEditProduct = async (productId: number) => {
    navigate(ProductRoutesEnum.PRODUCT_EDIT.replace(':productId', `${productId}`));
  };

  const handleCloseModalDelete = () => {
    setProductIdDelete(undefined);
  };

  const handleOpenModalDelete = (productId: number) => {
    setProductIdDelete(productId);
  };

  return {
    dataWithKeys,
    openModalDelete: !!productIdDelete,
    handleOnClickInsert,
    onSearch,
    handleDeleteProduct,
    handleEditProduct,
    handleCloseModalDelete,
    handleOpenModalDelete,
  };
};
