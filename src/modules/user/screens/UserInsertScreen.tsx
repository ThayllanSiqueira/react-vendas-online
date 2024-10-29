import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { useUserInsert } from '../hooks/useUserInsert';
import { UserRoutesEnum } from '../routes';

const UserInsert = () => {
  const { user, disbledButton, handleCancelInsert, handleInsertAdmin, handleOnChangeInput } =
    useUserInsert();
  const listBreadcrumb = [
    {
      title: 'HOME',
    },
    {
      title: 'USUÁRIOS',
      navigateTo: UserRoutesEnum.USER,
    },
    {
      title: 'INSERIR',
    },
  ];

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            value={user.name}
            onChange={(event) => handleOnChangeInput(event, 'name')}
            margin="0 0 16px 0"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            value={user.phone}
            onChange={(event) => handleOnChangeInput(event, 'phone')}
            margin="0 0 16px 0"
            title="Telefone"
            placeholder="Telefone"
          />
          <Input
            value={user.email}
            onChange={(event) => handleOnChangeInput(event, 'email')}
            margin="0 0 16px 0"
            title="Email"
            placeholder="Email"
          />
          <Input
            value={user.cpf}
            onChange={(event) => handleOnChangeInput(event, 'cpf')}
            margin="0 0 16px 0"
            title="CPF"
            placeholder="CPF"
          />
          <Input
            value={user.password}
            onChange={(event) => handleOnChangeInput(event, 'password')}
            margin="0 0 16px 0"
            title="Senha"
            placeholder="Senha"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0 8px" width={120}>
              <Button danger onClick={handleCancelInsert}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button disabled={disbledButton} onClick={handleInsertAdmin} type="primary">
                Inserir Admin
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default UserInsert;
