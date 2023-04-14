import React from 'react';
import { Avatar, Text, Wrapper } from '../Atoms';

const ListItem = ({ avatarSrc, name, message }) => {
  return (
    <Wrapper as="li" display="flex" alignItems="center" padding="1rem" cursor="pointer" transition="background-color 0.3s ease" hoverBackgroundColor="#eee">
      <Avatar src={avatarSrc} />
      <Wrapper marginLeft="1rem">
        <Text fontWeight="bold">{name}</Text>
        <Text>{message}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default ListItem;
