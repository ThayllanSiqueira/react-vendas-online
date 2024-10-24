import Screen from '../../../shared/components/screen/Screen';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  return (
    <Screen
      listBreadcrumb={[
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
      ]}
    >
      Insert Product
    </Screen>
  );
};

export default ProductInsert;
