import { render } from '@testing-library/react';
import Button from './Button';

it('checkButtonRender', () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle('testBtn');

  expect(btn).toBeTruthy();
});
