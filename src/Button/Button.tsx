import React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  ariaLabel: string;
  disabled: boolean;
  children: ReactNode;
}

/**
 * Button component
 * @param {type} - represents type of button. By default it's 'button'
 * @param {ariaLabel} - represents provided description about the element's purpose and functionality to assistive technologies
 * @param {disabled} - represents whether the button is disabled or not. By default it's false
 * @param {children} - represents children of the button, it can be plain text or other component or tag
 * @returns {JSX.Element} A React button component with specified type, accessibility label, and children.
 * @example
 * <Button
 *  type="submit"
 *  disabled={false}
 *  ariaLabel="Submit registration form"
 * >
 *  Submit
 * </Button>
 */

export const Button = ({
  type = 'button',
  ariaLabel,
  disabled = false,
  children,
  ...props
}: IButton) => {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={props['aria-label'] ?? ariaLabel}
      aria-disabled={props['aria-disabled'] ?? disabled}
      {...props}>
      {children}
    </button>
  );
};
