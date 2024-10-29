import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [name, setName] = useState('');
  const [disableButton, setDisablebutton] = useState(true);
  const navigate = useNavigate();
  const { request, loading } = useRequests();
  const { setCategories, setCategory, category } = useCategoryReducer();

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const insertCategory = async () => {
    if (categoryId) {
      await request(
        URL_CATEGORY_ID.replace('{categoryId}', categoryId),
        MethodsEnum.PUT,
        undefined,
        { name },
        'Categoria alterada!',
      );
    } else {
      await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name }, 'Categoria cadastrada!');
    }
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  useEffect(() => {
    if (!name) {
      setDisablebutton(true);
    } else {
      setDisablebutton(false);
    }
  }, [name]);

  useEffect(() => {
    if (categoryId) {
      request(URL_CATEGORY_ID.replace('{categoryId}', categoryId), MethodsEnum.GET, setCategory);
    } else {
      setName('');
    }
  }, [categoryId]);

  return {
    name,
    loading,
    disableButton,
    categoryId,
    handleOnChangeName,
    insertCategory,
    handleOnClickCancel,
  };
};
