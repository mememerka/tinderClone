import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Label = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
