import Screen from '../../../shared/components/screen/Screen';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'PRODUTOS',
      navigateTo: ProductRoutesEnum.PRODUCT,
    },
    {
      title: 'INSERIR PRODUTOS',
    },
  ];
  return <Screen listBreadcrumb={listBreadcrumb}>Insert Product</Screen>;
};

export default ProductInsert;
