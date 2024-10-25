import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisablebutton] = useState(true);
  const navigate = useNavigate();
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const insertCategory = async () => {
    setLoading(true);
    await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name });
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    setLoading(false);
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  useEffect(() => {
    if (!name) {
      setDisablebutton(true);
    } else {
      setDisablebutton(false);
    }
  }, [name]);

  return {
    name,
    loading,
    disableButton,
    handleOnChangeName,
    insertCategory,
    handleOnClickCancel,
  };
};
