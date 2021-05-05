import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

it('checkButtonRender', () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle('testBtn');

  expect(btn).toBeTruthy();
});

describe('btnClicked', () => {
  it('onClick', () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle('testBtn');
    expect(btn.innerHTML).toBe('Click Me');
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe('You Clicked');
  });
});
