import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders the Rating component', () => {
  render(
    <Button type="submit" ariaLabel="Submit registration form" disabled={false}>
      Submit
    </Button>,
  );

  console.log(screen.getByText('Submit'));

  expect(screen.getByText('Submit')).toBeInTheDocument();

  expect(screen.getByRole('button')).toHaveAttribute(
    'aria-label',
    'Submit registration form',
  );

  expect(screen.getByRole('button')).not.toBeDisabled();

  expect(screen.getByRole('button')).toHaveTextContent('Submit');
});
