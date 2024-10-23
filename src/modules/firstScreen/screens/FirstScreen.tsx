import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, [user]);

  return <Spin />;
};

export default FirstScreen;
