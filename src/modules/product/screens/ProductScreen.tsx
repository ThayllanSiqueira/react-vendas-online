import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, type TableProps } from 'antd';
import { useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { useProduct } from '../hooks/useProduct';

const { Search } = Input;

const listBreadcrumb = [
  {
    title: 'HOME',
  },
  {
    title: 'PRODUTOS',
  },
];

const ProductScreen = () => {
  const { dataWithKeys, handleOnClickInsert, onSearch, handleDeleteProduct, handleEditProduct } =
    useProduct();
  const columns: TableProps<ProductType>['columns'] = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (_, product) => <TooltipImage product={product} />,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',
        render: (_, product) => <CategoryColumn category={product.category} />,
      },
      {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
        render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
      },
      {
        title: 'Action',
        dataIndex: '',
        width: 240,
        key: 'x',
        render: (_, product) => (
          <LimitedContainer width={120}>
            <DisplayFlex>
              <Button
                margin="0 16px 0 0"
                onClick={() => handleEditProduct(product.id)}
                icon={<EditOutlined />}
              >
                Editar
              </Button>
              <Button
                danger
                onClick={() => handleDeleteProduct(product.id)}
                icon={<DeleteOutlined />}
              >
                Deletar
              </Button>
            </DisplayFlex>
          </LimitedContainer>
        ),
      },
    ],
    [],
  );

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyBetween margin="0 0 16px 0">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
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

export default ProductScreen;
