import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { useCategory } from '../../category/hooks/useCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  const {
    loading,
    disableButton,
    product,
    handleInsertProduct,
    onChangeInput,
    handleChangeSelect,
    handleOnClickCancel,
  } = useInsertProduct();
  const { categories } = useCategory();

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

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'image')}
            value={product.image}
            margin="0 0 16px 0"
            title="Url Imagem"
            placeholder="Url Imagem"
          />
          <InputMoney
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0 0 16px 0"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            title="Categoria"
            margin="0 0 32px 0"
            onChange={handleChangeSelect}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                loading={loading}
                disabled={disableButton}
                onClick={handleInsertProduct}
                type="primary"
              >
                Inserir Produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default ProductInsert;
