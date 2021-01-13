import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CheckmarkSvg } from '../assets/checkmark.svg';
import { ReactComponent as CheckboxSvg } from '../assets/checkbox.svg';

const CustomCheckbox = (props) => {
  return (
    props.isActive
      ? (
        <CheckmarkSvg width={18} height={18} onClick={() => props.onToggle(false)} />
      ) : (
        <CheckboxSvg width={18} height={18} onClick={() => props.onToggle(true)} />
      )
  );
}

CustomCheckbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CustomCheckbox;
