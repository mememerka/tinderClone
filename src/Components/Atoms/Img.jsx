import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Img = ({ ...props }) => {
  return <StyledImg {...props} />;
};

export default Img;
