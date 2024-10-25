import { render } from '@testing-library/react';

import { mockProductInsert } from '../../__mocks__/productInsert.mock';
import ProductInsert from '../ProductInsertScreen';
import { ProductInsertTestIdEnum } from './ProductInsertTestIdEnum';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../category/hooks/useCategory', () => ({
  useCategory: () => ({
    categories: [],
  }),
}));

jest.mock('../../hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disableButton: false,
    onChangeInput: jest.fn(),
    handleInsertProduct: jest.fn(),
    handleChangeSelect: jest.fn(),
    handleOnClickCancel: jest.fn(),
  }),
}));

describe('Test ProductInsert', () => {
  it('should render', () => {
    const { getByTestId } = render(<ProductInsert />);
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_NAME)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)).toBeDefined();
  });
});
