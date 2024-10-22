import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
          <Button type="primary" margin="64px 0 16px 0">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
