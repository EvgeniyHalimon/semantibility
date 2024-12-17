import React from 'react';
import { render, screen } from '@testing-library/react';
import { Figcaption } from './Figcaption';

test('renders the Figcaption component', () => {
  render(
    <Figcaption
      figcaption="Awesome dog near the river"
      figcaptionProps={{ id: '1' }}
    />,
  );

  const figcaption = screen.getByText('Awesome dog near the river');

  expect(figcaption).toBeInTheDocument();

  expect(figcaption).toHaveAttribute('id', '1');
});
