import { useParams } from 'react-router-dom';
import { Wrapper, Avatar, Text } from '../Atoms';

const ChatScreen = () => {
  const { id } = useParams();
  const chat = chats.find(chat => chat.id === id);

  return (
    <Wrapper height="100%" display="flex" flexDirection="column">
      <Wrapper backgroundColor="#fff" boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)" padding="1rem">
        <Avatar src={chat.avatar} alt={chat.name} marginRight="1rem" />
        <Text fontWeight="bold">{chat.name}</Text>
      </Wrapper>
      <Wrapper flex="1" overflowY="auto" padding="1rem">
        {/* renderización de los mensajes */}
      </Wrapper>
      <Wrapper backgroundColor="#fff" boxShadow="0px -2px 5px rgba(0, 0, 0, 0.1)" padding="1rem">
        {/* input para enviar mensajes */}
      </Wrapper>
    </Wrapper>
  );
};

export default ChatScreen;

