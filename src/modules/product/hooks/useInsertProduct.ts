import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dtos/InsertProduct.dto';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../routes';

export const useInsertProduct = () => {
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisablebutton] = useState(true);
  const navigate = useNavigate();
  const { setNotification } = useGlobalReducer();
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
    weight: 0,
    length: 0,
    height: 0,
    width: 0,
    diameter: 0,
  });

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [product]);

  const handleInsertProduct = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Sucesso', 'success', 'Produto inserido com sucesso!');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
  };

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  return {
    loading,
    disableButton,
    product,
    handleInsertProduct,
    onChangeInput,
    handleChangeSelect,
    handleOnClickCancel,
  };
};
