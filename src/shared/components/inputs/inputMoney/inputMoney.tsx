import { useEffect, useState } from 'react';

import Input, { InputProps } from '../input/input';
import { InputMoneyTestId } from './__tests__/inputMoneyEnum';

interface InputMoneyProps extends InputProps {
  value: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const SIZE_DECIMAL = 2;

const InputMoney = ({ value, onChange, addonBefore = 'R$', ...props }: InputMoneyProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);

  useEffect(() => {
    const valueString = `${value}`;
    if (!/\D/.test(valueString.replace('.', ''))) {
      setCurrentValue(value.toFixed(SIZE_DECIMAL).toString().replace('.', ','));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueRemoved = event.target.value.replace(',', '');

    const sizeSlice = valueRemoved.length - SIZE_DECIMAL;
    const newValue = [valueRemoved.slice(0, sizeSlice), '.', valueRemoved.slice(sizeSlice)].join(
      '',
    );
    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input
      data-testid={InputMoneyTestId.INPUT}
      addonBefore={addonBefore}
      value={currentValue}
      onChange={handleOnChange}
      {...props}
    />
  );
};

export default InputMoney;
