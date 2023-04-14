import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size || '1rem'};
`;

const Icon = ({ name, ...props }) => {
  return <StyledIcon className="material-icons" {...props}>{name}</StyledIcon>;
};

export default Icon;
