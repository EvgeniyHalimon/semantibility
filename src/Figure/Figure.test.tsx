import React from 'react';
import { render, screen } from '@testing-library/react';
import { Figure } from './Figure';

test('renders the Button component', () => {
  render(
    <Figure
      imageProps={{
        src: './awesome.jpeg',
        alt: 'Awesome dog',
        ariaHidden: false,
        ariaLabel: 'An awesome image of a dog',
      }}
      figcaptionProps={{ figcaption: 'Awesome dog near the river' }}
      aria-hidden={false}
    />,
  );

  const figure = screen.getByRole('figure');
  const figcaption = screen.getByText('Awesome dog near the river');
  const image = screen.getByAltText('Awesome dog');

  expect(figure).toBeInTheDocument();
  expect(figcaption).toBeInTheDocument();
  expect(image).toBeInTheDocument();

  expect(figure).toHaveAttribute('aria-hidden', 'false');
});
