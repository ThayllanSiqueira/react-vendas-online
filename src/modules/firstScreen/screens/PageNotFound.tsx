import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { LoginRoutesEnum } from '../../login/routes';
import { ContainerPageNotFound } from '../styles/pageNotFound.style';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleOnClickButton = () => {
    navigate(LoginRoutesEnum.LOGIN);
  };
  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você está visitando não esxiste."
        extra={
          <Button type="primary" onClick={handleOnClickButton}>
            Página de Login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
