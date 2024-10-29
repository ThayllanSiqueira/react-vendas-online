import { Input, Spin, TableProps } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyBetween,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { UserTypeEnum } from '../../../shared/enums/userType.enum';
import { getUserInfoByToken } from '../../../shared/functions/connection/auth';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';
import { UserRoutesEnum } from '../routes';

const { Search } = Input;

const columns: TableProps<UserType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (text) => <a>{insertMaskInCpf(text)}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{insertMaskInPhone(text)}</a>,
  },
];

const listBreadcrumb = [
  {
    title: 'HOME',
  },
  {
    title: 'USUÁRIOS',
  },
];

const UserScreen = () => {
  const { dataWithKeys, loading, handleOnChangeSearch } = useUser();
  const navigate = useNavigate();

  const userToken = useMemo(() => getUserInfoByToken(), []);

  const handleGoToInsertAdmin = () => {
    navigate(UserRoutesEnum.USER_INSERT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      {loading && (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      )}

      {!loading && (
        <>
          <DisplayFlexJustifyBetween margin="0 0 16px 0">
            <LimitedContainer width={240}>
              <Search placeholder="Buscar Usuário" onSearch={handleOnChangeSearch} enterButton />
            </LimitedContainer>
            <LimitedContainer width={180}>
              {userToken?.typeUser === UserTypeEnum.Root && (
                <Button type="primary" onClick={handleGoToInsertAdmin}>
                  Inserir Admin
                </Button>
              )}
            </LimitedContainer>
          </DisplayFlexJustifyBetween>
          <Table columns={columns} dataSource={dataWithKeys} />
        </>
      )}
    </Screen>
  );
};

export default UserScreen;
