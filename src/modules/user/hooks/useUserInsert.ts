import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { InsertUser } from '../../../shared/dtos/InsertUser.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserRoutesEnum } from '../routes';

export const useUserInsert = () => {
  const navigate = useNavigate();
  const [disbledButton, setDisabledButton] = useState(true);
  const { request, loading } = useRequests();
  const [user, setUser] = useState<InsertUser>({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleCancelInsert = () => {
    navigate(UserRoutesEnum.USER);
  };

  const handleInsertAdmin = async () => {
    await request(URL_USER, MethodsEnum.POST, undefined, user);
    navigate(UserRoutesEnum.USER);
  };

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (user.name && user.cpf && user.email && user.phone && user.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  return {
    user,
    disbledButton,
    loading,
    handleCancelInsert,
    handleInsertAdmin,
    handleOnChangeInput,
  };
};
