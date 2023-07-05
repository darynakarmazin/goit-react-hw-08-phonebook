import React from 'react';
import PropTypes from 'prop-types';

import { FilterArea } from 'components/filter/Filter.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <FilterArea type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
