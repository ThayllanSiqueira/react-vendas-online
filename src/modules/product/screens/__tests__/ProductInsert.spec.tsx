import { fireEvent, render } from '@testing-library/react';

import { mockProductInsert } from '../../__mocks__/productInsert.mock';
import ProductInsert from '../ProductInsertScreen';
import { ProductInsertTestIdEnum } from './ProductInsertTestIdEnum';

let value = '';
let type = '';
const mockButtonInsert = jest.fn();
const mockButtonCancel = jest.fn();

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
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
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, x: string) => {
      value = e.target.value;
      type = x;
    },
    handleInsertProduct: mockButtonInsert,
    handleChangeSelect: jest.fn(),
    handleOnClickCancel: mockButtonCancel,
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

  it('should call onChangeInput in change name', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_NAME);
    fireEvent.change(input, { target: { value: 'MOCK_VALUE' } });

    expect(value).toEqual('MOCK_VALUE');
    expect(type).toEqual('name');
  });

  it('should call onChangeInput in change price', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE);
    fireEvent.change(input, { target: { value: '543' } });

    expect(value).toEqual('5.43');
    expect(type).toEqual('price');
  });

  it('should call onChangeInput in change image', () => {
    const { getByTestId } = render(<ProductInsert />);
    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE);
    fireEvent.change(input, { target: { value: 'http-image' } });

    expect(value).toEqual('http-image');
    expect(type).toEqual('image');
  });

  it('should call handleInsertProduct in click insert button', () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT);
    fireEvent.click(button);

    expect(mockButtonInsert).toHaveBeenCalled();
  });

  /* it('should call navigate in click cancel button', () => {
    const { getByTestId } = render(<ProductInsert />);
    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL);
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalled();
  }); */
});
