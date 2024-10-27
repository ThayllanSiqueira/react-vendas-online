import { Descriptions, DescriptionsProps, Divider } from 'antd';

import Screen from '../../../shared/components/screen/Screen';
import { OrderRoutesEnum } from '../routes';

const user: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Juliano',
  },
  {
    key: '2',
    label: 'Email',
    children: 'root@root.com',
    span: 2,
  },
  {
    key: '3',
    label: 'Telefone',
    children: '61 994606467',
  },
  {
    key: '4',
    label: 'CPF',
    children: '04103169117',
    span: 2,
  },
];
const payment: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Juliano',
  },
  {
    key: '2',
    label: 'Email',
    children: 'root@root.com',
    span: 2,
  },
  {
    key: '3',
    label: 'Telefone',
    children: '61 994606467',
  },
  {
    key: '4',
    label: 'CPF',
    children: '04103169117',
    span: 2,
  },
];
const addres: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Juliano',
  },
  {
    key: '2',
    label: 'Email',
    children: 'root@root.com',
    span: 2,
  },
  {
    key: '3',
    label: 'Telefone',
    children: '61 994606467',
  },
  {
    key: '4',
    label: 'CPF',
    children: '04103169117',
    span: 2,
  },
];
const products: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Juliano',
  },
  {
    key: '2',
    label: 'Email',
    children: 'root@root.com',
    span: 2,
  },
  {
    key: '3',
    label: 'Telefone',
    children: '61 994606467',
  },
  {
    key: '4',
    label: 'CPF',
    children: '04103169117',
    span: 2,
  },
];

/* const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nome',
    children: 'Juliano',
  },
  {
    key: '2',
    label: 'Email',
    children: 'Prepaid',
    span: 2,
  },
  {
    key: '3',
    label: 'Telefone',
    children: 'YES',
  },
  {
    key: '4',
    label: 'CPF',
    children: '2018-04-24 18:00:00',
    span: 2,
  },
  {
    key: '5',
    label: 'Usage Time',
    children: '2019-04-24 18:00:00',
    span: 2,
  },
  {
    key: '6',
    label: 'Status',
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
  {
    key: '7',
    label: 'Negotiated Amount',
    children: '$80.00',
  },
  {
    key: '8',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
  },
  {
    key: '10',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
]; */

const OrderDetails = () => {
  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'PEDIDOS',
      navigateTo: OrderRoutesEnum.ORDER,
    },
    {
      title: 'DETALHES',
    },
  ];
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <Descriptions title="Dados usuário" bordered items={user} />
      <Divider />
      <Descriptions title="Dados Pagamento" bordered items={payment} />
      <Divider />
      <Descriptions title="Dados Enderço" bordered items={addres} />
      <Divider />
      <Descriptions title="Produtos" bordered items={products} />
    </Screen>
  );
};

export default OrderDetails;
