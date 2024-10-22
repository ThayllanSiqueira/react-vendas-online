import axios from 'axios';
import React, { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // root@root.com
    // abc
    const returnObject = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8080/auth',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        alert(`Fez Login ${result.data.accessToken}`);
        return result.data;
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário ou Senha invalido!');
      });
    console.log('return: ', returnObject);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0 0" onChange={handleEmail} value={email} />
          <Input
            title="SENHA"
            margin="32px 0 0"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="64px 0 16px 0" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
