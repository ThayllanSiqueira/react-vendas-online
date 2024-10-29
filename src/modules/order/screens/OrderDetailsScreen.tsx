import { Descriptions, DescriptionsProps, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.styled';
import { insertMaskInCEP } from '../../../shared/functions/address';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import ListOrderProduct from '../components/ListOrderProduct';
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
      children: `${insertMaskInPhone(order.user?.phone)}`,
    },
    {
      key: '4',
      label: 'CPF',
      children: `${insertMaskInCpf(order.user?.cpf)}`,
      span: 2,
    },
  ];
  const payment: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Preço',
      children: `${convertNumberToMoney(order.payment?.price || 0)}`,
    },
    {
      key: '2',
      label: 'Desconto',
      children: `${convertNumberToMoney(order.payment?.discount || 0)}`,
      span: 2,
    },
    {
      key: '3',
      label: 'Preço Final',
      children: `${convertNumberToMoney(order.payment?.finalPrice || 0)}`,
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
      label: 'Cidade',
      children: `${order.address?.city?.name}`,
    },
    {
      key: '2',
      label: 'Estado',
      children: `${order.address?.city?.state?.name}`,
    },
    {
      key: '3',
      label: 'Complemento',
      children: `${order.address?.complement}`,
    },
    {
      key: '4',
      label: 'Número',
      children: `${order.address?.numberAddress}`,
    },
    {
      key: '5',
      label: 'CEP',
      children: `${insertMaskInCEP(order.address?.cep || '')}`,
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
      {order.ordersProduct && order.ordersProduct?.length > 0 && (
        <ListOrderProduct ordersProduct={order.ordersProduct} />
      )}
    </Screen>
  );
};

export default OrderDetails;
