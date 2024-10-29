import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Modal, TableProps } from 'antd';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../hooks/useCategory';

const { Search } = Input;

const listBreadcrumb = [
  {
    title: 'HOME',
  },
  {
    title: 'CATEGORIAS',
  },
];

const CategoryScreen = () => {
  const {
    dataWithKeys,
    openModalDelete,
    handleOnChangeSearch,
    handleOnClickInsert,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleConfirmDeleteCategory,
  } = useCategory();

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
    {
      title: 'Ações',
      dataIndex: '',
      width: 240,
      key: 'x',
      render: (_, category) => (
        <LimitedContainer width={120}>
          <DisplayFlex>
            <LimitedContainer margin="0 16px 0 0" width={74}>
              <Button onClick={() => null} icon={<EditOutlined />}>
                Editar
              </Button>
            </LimitedContainer>
            {category.amountProducts <= 0 && (
              <Button
                danger
                onClick={() => handleOpenModalDelete(category.id)}
                icon={<DeleteOutlined />}
              >
                Deletar
              </Button>
            )}
          </DisplayFlex>
        </LimitedContainer>
      ),
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Modal
        title="Atenção"
        open={openModalDelete}
        onOk={() => handleConfirmDeleteCategory()}
        onCancel={handleCloseModalDelete}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja excluir esta categoria?</p>
      </Modal>
      <DisplayFlexJustifyBetween margin="0 0 16px 0">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar categoria" onSearch={handleOnChangeSearch} enterButton />
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
