import React, { HTMLAttributes, ReactNode } from 'react';

export interface IFigcaption extends HTMLAttributes<HTMLElement> {
  figcaption: ReactNode;
  figcaptionProps?: HTMLAttributes<HTMLElement>;
}

export const Figcaption = ({ figcaption, figcaptionProps }: IFigcaption) => {
  return <figcaption {...figcaptionProps}>{figcaption}</figcaption>;
};
