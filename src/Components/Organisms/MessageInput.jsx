import React, { useState } from 'react';
import { Wrapper, IconButton, Input } from '../Atoms';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <Wrapper
      display="flex"
      alignItems="center"
      backgroundColor="#fff"
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
      padding="1rem"
    >
      <Wrapper flex="1" marginRight="1rem">
        <Input
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Wrapper>
      <IconButton icon="send" onClick={handleSend} disabled={!message} />
    </Wrapper>
  );
};

export default MessageInput;