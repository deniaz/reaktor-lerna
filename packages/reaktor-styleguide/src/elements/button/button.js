import PropTypes from 'prop-types';
import React from 'react';

import { className } from '../../utils/class-name';
import styles from './button.scss';

export const Button = ({ label = null, href, primary = false, large = false, disabled = false, onClick }) => {
  const DOMElement = href ? 'a' : 'button';

  if (!!href && !!onClick) {
    console.warn(`Cannot have href and onClick`);
  }

  if (!href && !onClick) {
    console.warn(`Must have either href or onClick`);
  }

  const props = {
    disabled,
    onClick,
    href,
  };

  return (
    <DOMElement
      {...props}
      className={className([
        styles.button,
        primary && styles['button--primary'],
        large && styles['button--large'],
        disabled && styles['button--disabled'],
      ])}>
      {label}
    </DOMElement>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
