import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

export interface ListBreadcrumbProps {
  title: string;
  navigateTo?: string;
}
interface BreadcrumbProps {
  listBreadcrumb?: ListBreadcrumbProps[]; // Permitir undefined como valor
}

const Breadcrumb = ({ listBreadcrumb = [] }: BreadcrumbProps) => {
  // Definir um valor padrão como uma lista vazia
  const navigate = useNavigate();
  const handleGoToClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <BreadcrumbAntd
      items={listBreadcrumb.map((breadcrumb) => {
        if (breadcrumb.navigateTo) {
          return {
            title: (
              <a onClick={() => handleGoToClick(breadcrumb.navigateTo || '')}>{breadcrumb.title}</a>
            ),
          };
        } else {
          return {
            title: breadcrumb.title,
          };
        }
      })}
    />
  );
};

export default Breadcrumb;
