import { TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrder';
import { OrderRoutesEnum } from '../routes';

const columns: TableProps<OrderType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, target) => <a>{target.user?.name}</a>,
  },
  {
    title: 'Qtd. Produtos',
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
    title: 'PEDIDOS',
  },
];

const OrderScreen = () => {
  const { dataWithKeys } = useOrder();
  const navigate = useNavigate();
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Table
        onRow={() => ({
          onClick: () => navigate(OrderRoutesEnum.ORDER_ID),
        })}
        columns={columns}
        dataSource={dataWithKeys}
      />
    </Screen>
  );
};

export default OrderScreen;
