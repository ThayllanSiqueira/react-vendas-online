import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { useInsertCategory } from '../hooks/useInsertCategory';
import { CategoryRoutesEnum } from '../routes';

const CategoryInsert = () => {
  const { name, loading, handleOnChangeName, insertCategory, handleOnClickCancel } =
    useInsertCategory();
  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'CATEGORIAS',
      navigateTo: CategoryRoutesEnum.CATEGORY,
    },
    {
      title: 'INSERIR CATEGORIA',
    },
  ];
  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={handleOnChangeName}
            value={name}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 8px" width={120}>
              <Button onClick={handleOnClickCancel} danger>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={160}>
              <Button onClick={insertCategory} loading={loading} type="primary">
                Inserir Categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
