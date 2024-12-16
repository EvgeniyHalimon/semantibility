import React, { ImgHTMLAttributes } from 'react';

interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  ariaHidden: boolean;
  ariaLabel: string;
}

/**
 * Image component
 * @param {src} - src of image
 * @param {alt} - required image description, shown if the image does not load
 * @param {ariaHidden} - if true, hides the image from screen readers (default false)
 * @param {ariaLabel} - additional description of image
 * @returns {JSX.Element} - image with following attributes
 * @example
 * <Image
 *   src="./awesome.jpeg"
 *   alt="Awesome dog"
 *   ariaHidden={false}
 *   ariaLabel="An awesome image of a dog"
 * />
 */

export const Image = ({
  src,
  alt,
  ariaHidden = false,
  ariaLabel,
  ...props
}: IImage) => {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={props['aria-hidden'] ?? ariaHidden}
      aria-label={props['aria-label'] ?? ariaLabel}
      {...props}
    />
  );
};
