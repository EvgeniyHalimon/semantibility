import React, { HTMLAttributes } from 'react';
import { IImage, Image } from '../Image';
import { Figcaption, IFigcaption } from '../Figcaption';

interface IFigureProps extends HTMLAttributes<HTMLElement> {
  imageProps: IImage;
  figcaptionProps: IFigcaption;
}

export const Figure: React.FC<IFigureProps> = ({
  imageProps,
  figcaptionProps,
  ...rest
}) => {
  return (
    <figure {...rest}>
      <Image {...imageProps} />
      <Figcaption
        {...figcaptionProps}
        figcaption={figcaptionProps.figcaption}
      />
    </figure>
  );
};
