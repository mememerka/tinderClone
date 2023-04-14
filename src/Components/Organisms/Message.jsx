import React from 'react';
import { Wrapper, Image, Text } from '../Atoms';

const Message = ({ message, sender }) => {
  const isSender = sender === 'user';
  const justifyContent = isSender ? 'flex-end' : 'flex-start';

  return (
    <Wrapper justifyContent={justifyContent} margin="0.5rem 0">
      {!isSender && (
        <Wrapper marginRight="0.5rem">
          <Image src={message.avatar} borderRadius="50%" width="40px" />
        </Wrapper>
      )}
      <Wrapper
        backgroundColor={isSender ? '#8bc34a' : '#fff'}
        borderRadius="20px"
        maxWidth="80%"
        padding="0.5rem 1rem"
      >
        <Text color={isSender ? '#fff' : '#333'}>{message.text}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default Message;
