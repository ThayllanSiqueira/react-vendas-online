import { useEffect, useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dtos/InsertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { LimitedContainer } from '../styles/productinsert.style';

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, nameObject: string) => {
    setProduct({
      ...product,
      [nameObject]: event.target.value,
    });
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: Number(event.target.value),
    });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleInsertProduct = () => {
    connectionAPIPost(URL_PRODUCT, product);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <LimitedContainer>
        <Input
          onChange={(event) => onChange(event, 'name')}
          value={product.name}
          margin="0 0 16px 0"
          title="Nome"
          placeholder="Nome"
        />
        <Input
          onChange={(event) => onChange(event, 'image')}
          value={product.image}
          margin="0 0 16px 0"
          title="Url Imagem"
          placeholder="Url Imagem"
        />
        <Input
          onChange={onChangePrice}
          value={product.price}
          margin="0 0 16px 0"
          title="Preço"
          placeholder="Preço"
        />
        <Select
          title="Categoria"
          margin="0 0 32px 0"
          onChange={handleChange}
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button onClick={handleInsertProduct} type="primary">
          Inserir Produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
