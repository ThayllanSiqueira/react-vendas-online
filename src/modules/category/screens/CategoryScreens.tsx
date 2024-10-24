import Screen from '../../../shared/components/screen/Screen';
import { useCategory } from '../hooks/useCategory';

const CategoryScreen = () => {
  const { categories } = useCategory();
  return (
    <Screen>
      <div>Categorias</div>
      {categories.map((category) => (
        <div>{category.name}</div>
      ))}
    </Screen>
  );
};

export default CategoryScreen;
