import PropTypes from 'prop-types';
import React from 'react';

import { Label } from '../../identity/typography/label';
import styles from './checkbox.scss';

export const Checkbox = ({ name, value, label = null, checked = false, onChange = () => {} }) => (
  <label className={styles.Checkbox}>
    <input
      className={styles.Checkbox__control}
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label && (
      <Label accent className={styles.Checkbox__label}>
        {label}
      </Label>
    )}
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
