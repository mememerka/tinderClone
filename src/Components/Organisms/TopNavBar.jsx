import React from 'react';
import { Wrapper, Image, Text, IconButton } from '../Atoms';

const TopNavBar = ({ title, onBack }) => {
  return (
    <Wrapper
      display="flex"
      alignItems="center"
      backgroundColor="#fff"
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
      padding="1rem"
    >
      {onBack && (
        <IconButton icon="arrowBack" onClick={onBack} marginRight="1rem" />
      )}
      <Image src="/logo.png" width="40px" marginRight="1rem" />
      <Text fontWeight="bold">{title}</Text>
    </Wrapper>
  );
};

export default TopNavBar;