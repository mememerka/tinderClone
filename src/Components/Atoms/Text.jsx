import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0;
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
