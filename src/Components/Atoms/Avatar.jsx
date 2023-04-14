import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  border-radius: 50%;
`;