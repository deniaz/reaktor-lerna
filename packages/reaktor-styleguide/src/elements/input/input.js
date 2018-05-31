import PropTypes from 'prop-types';
import React from 'react';

export const Input = ({ name, value = '', type = 'text', label = null, onChange = () => {} }) => (
  <label>
    {label && <span>{label}</span>}
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'number',
    'text',
    'password',
    'search',
    'tel',
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
