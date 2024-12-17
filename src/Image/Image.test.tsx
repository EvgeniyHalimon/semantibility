import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image } from './Image';

test('renders the Image component', () => {
  render(
    <Image
      src="./awesome.jpeg"
      alt="Awesome dog"
      ariaHidden={false}
      ariaLabel="An awesome image of a dog"
    />,
  );

  const image = screen.getByAltText('Awesome dog');

  expect(image).toBeInTheDocument();

  expect(image).toHaveAttribute('aria-label', 'An awesome image of a dog');

  expect(image).toHaveAttribute('aria-hidden', 'false');

  expect(image).not.toHaveAttribute('alt', 'Wrong alt text');
});
