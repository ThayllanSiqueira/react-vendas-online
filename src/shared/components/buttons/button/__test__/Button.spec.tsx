import { render, screen } from '@testing-library/react';

import Button from '../Button';

const TEXT_MOCK = 'TEXT_MOCK';
const TEXT_ID = 'TEXT_ID';
const MARGIN = '23px';

describe('Test Button', () => {
  beforeEach(() => {
    render(
      <Button data-testid={TEXT_ID} margin={MARGIN}>
        {TEXT_MOCK}
      </Button>,
    );
  });
  it('should render', () => {
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });

  it('should render with margin', () => {
    expect(screen.getByTestId(TEXT_ID)).toHaveAttribute('style', `margin: ${MARGIN};`);
  });
});
