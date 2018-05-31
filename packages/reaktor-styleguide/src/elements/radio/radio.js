import PropTypes from 'prop-types';
import React from 'react';

import { Label } from '../../identity/typography/label';
import styles from './radio.scss';

export const Radio = ({ name, value, label = null, checked = false, onChange = () => {} }) => (
  <label className={styles.Radio}>
    <input className={styles.Radio__control} type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    {label && (
      <Label accent className={styles.Radio__label}>
        {label}
      </Label>
    )}
  </label>
);

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
