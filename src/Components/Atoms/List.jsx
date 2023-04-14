import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = ({ children, ...props }) => {
  return (
    <StyledList {...props}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...props });
      })}
    </StyledList>
  );
};

export default List;