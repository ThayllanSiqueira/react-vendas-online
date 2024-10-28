import { Descriptions, DescriptionsProps, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.styled';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

const OrderDetails = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);

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

  if (!order || loading) {
    return (
      <DisplayFlexJustifyCenter>
        <Spin size="large" />
      </DisplayFlexJustifyCenter>
    );
  }

  const user: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Nome',
      children: `${order.user?.name}`,
    },
    {
      key: '2',
      label: 'Email',
      children: `${order.user?.email}`,
      span: 2,
    },
    {
      key: '3',
      label: 'Telefone',
      children: `${order.user?.phone}`,
    },
    {
      key: '4',
      label: 'CPF',
      children: `${order.user?.name}`,
      span: 2,
    },
  ];
  const payment: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Preço',
      children: `${order.payment?.price}`,
    },
    {
      key: '2',
      label: 'Desconto',
      children: `${order.payment?.discount}`,
      span: 2,
    },
    {
      key: '3',
      label: 'Preço Final',
      children: `${order.payment?.finalPrice}`,
    },
    {
      key: '4',
      label: 'Tipo de Pagamento',
      children: `${order.payment?.type}`,
      span: 2,
    },
    {
      key: '4',
      label: 'Status',
      children: `${order.payment?.paymentStatus?.name}`,
      span: 2,
    },
  ];
  const addres: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Nome',
      children: `${order.payment?.price}`,
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
      children: `${order.payment?.price}`,
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
