import { ContainerLogoMenu, ContainerMenu, LogoMenu, NameCompany } from './menu.style';

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoMenu>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoMenu>
    </ContainerMenu>
  );
};

export default Menu;
