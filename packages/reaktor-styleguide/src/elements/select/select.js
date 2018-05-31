import PropTypes from 'prop-types';
import React from 'react';

export const Select = ({ label, name, value, options, multiple = false, onChange = () => {} }) => (
  <label>
    {label && <span>{label}</span>}
    <select name={name} multiple={multiple} onChange={onChange} value={value}>
      {options.map(({ disabled, label, selected, value }) => (
        <option disabled={disabled} value={value}>
          {label}
        </option>
      ))}
    </select>
  </label>
);

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      value: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func,
};
