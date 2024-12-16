import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders the Rating component', () => {
  render(
    <Button type="submit" ariaLabel="Submit registration form" disabled={false}>
      Submit
    </Button>,
  );

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument();

  expect(button).toHaveAttribute(
    'aria-label',
    'Submit registration form',
  );

  expect(button).toHaveAttribute(
    'aria-disabled',
    "false",
  );

  expect(button).toHaveTextContent('Submit');
});
