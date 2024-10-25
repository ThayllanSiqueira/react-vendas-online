import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const insertCategory = () => {
    setLoading(true);
  };

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return {
    name,
    loading,
    handleOnChangeName,
    insertCategory,
    handleOnClickCancel,
  };
};
