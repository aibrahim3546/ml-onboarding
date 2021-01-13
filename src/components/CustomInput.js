import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LabelDiv } from './style';

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #DFE5F1;
  padding-bottom: 20px;
  color: #18273A;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 25px;
`;

const CustomInput = (props) => {
  return (
    <>
      <LabelDiv>{props.label}</LabelDiv>
      <StyledInput
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        {...props}
      />
    </>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
};

CustomInput.defaultProps = {
  placeholder: '',
  value: undefined,
  defaultValue: undefined,
};

export default CustomInput;
