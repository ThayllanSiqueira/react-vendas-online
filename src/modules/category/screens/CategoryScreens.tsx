import { Input, TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';
import { CategoryRoutesEnum } from '../routes';

const { Search } = Input;

const columns: TableProps<CategoryType>['columns'] = [
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
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const listBreadcrumb = [
  {
    title: 'HOME',
  },
  {
    title: 'CATEGORIAS',
  },
];

const CategoryScreen = () => {
  const { categories } = useCategory();
  const navigate = useNavigate();

  const dataWithKeys = categories.map((category) => ({
    ...category,
    key: category.id,
  }));

  const handleOnClickInsert = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin="0 0 16px 0">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar categoria" onSearch={onSearch} enterButton />
        </LimitedContainer>
        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={dataWithKeys} />
    </Screen>
  );
};

export default CategoryScreen;
