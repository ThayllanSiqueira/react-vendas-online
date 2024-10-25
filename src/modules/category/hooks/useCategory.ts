import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryRoutesEnum } from '../routes';

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const [categoriesFiltered, setCategoriesFiltered] = useState(categories);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoriesFiltered([...categories]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoriesFiltered([...categories]);
    } else {
      setCategoriesFiltered([
        ...categoriesFiltered.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  const dataWithKeys = categoriesFiltered.map((category) => ({
    ...category,
    key: category.id,
  }));

  const handleOnClickInsert = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  return {
    dataWithKeys,
    handleOnChangeSearch,
    handleOnClickInsert,
  };
};
