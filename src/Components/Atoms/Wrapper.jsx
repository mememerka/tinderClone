import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
`;

const Wrapper = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Wrapper;