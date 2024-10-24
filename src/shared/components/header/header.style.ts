import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: calc(100% - 240px);
  height: 72px;
  background-color: white;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoExit = styled(LogoutOutlined)`
  font-size: 24px;
`;
