import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0px 0px 5px rgba(255, 107, 107, 0.5);
  }
`;

const TextArea = ({ ...props }) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
