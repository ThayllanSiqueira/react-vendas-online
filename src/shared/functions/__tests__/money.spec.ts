import { convertNumberToMoney } from '../money';

describe('money', () => {
  it('should return cents', () => {
    const returnVale = convertNumberToMoney(543.43);
    expect(returnVale).toContain('R$');
    expect(returnVale).toContain('543,43');
  });

  it('should return integer', () => {
    const returnVale = convertNumberToMoney(643);
    expect(returnVale).toContain('R$');
    expect(returnVale).toContain('643,00');
  });

  it('should return thousand', () => {
    const returnVale = convertNumberToMoney(436643.43);
    expect(returnVale).toContain('R$');
    expect(returnVale).toContain('436.643,43');
  });
});
