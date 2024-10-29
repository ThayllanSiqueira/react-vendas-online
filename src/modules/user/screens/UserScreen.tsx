import { Input, Spin, TableProps } from 'antd';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyBetween,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';

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
            <LimitedContainer width={120}>
              <Button type="primary">Inserir</Button>
            </LimitedContainer>
          </DisplayFlexJustifyBetween>
          <Table columns={columns} dataSource={dataWithKeys} />
        </>
      )}
    </Screen>
  );
};

export default UserScreen;
