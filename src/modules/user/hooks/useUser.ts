import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { request, loading } = useRequests();
  const { users, setUsers } = useUserReducer();
  const [usersFiltered, setUsersFiltered] = useState(users);

  useEffect(() => {
    if (!users || users.length === 0) {
      request(URL_USER_ALL, MethodsEnum.GET, setUsers);
    }
  }, []);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setUsersFiltered([...users]);
    } else {
      setUsersFiltered([...users.filter((user) => user.name.includes(value))]);
    }
  };

  const dataWithKeys = usersFiltered.map((user) => ({
    ...user,
    key: user.id,
  }));

  return {
    dataWithKeys,
    loading,
    handleOnChangeSearch,
  };
};
