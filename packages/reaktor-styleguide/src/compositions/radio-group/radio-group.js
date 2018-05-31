import PropTypes from 'prop-types';
import React from 'react';

import { Radio } from '../../elements/radio';
import { Label } from '../../identity/typography/label';

export const RadioGroup = ({ label, options }) => (
  <div>
    <Label>{label}</Label>
    <div>{options.map((option) => <Radio {...option} />)}</div>
  </div>
);
RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      onChange: PropTypes.func,
    }),
  ).isRequired,
};
