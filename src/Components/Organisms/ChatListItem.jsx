import { Link } from 'react-router-dom';
import { Wrapper, Avatar, Badge, Text } from '../Atoms';

const ChatListItem = ({ chat }) => {
  return (
    <Link to={`/chat/${chat.id}`}>
      <Wrapper display="flex" alignItems="center" padding="1rem" borderBottom="1px solid #eee">
        <Avatar src={chat.avatar} alt={chat.name} marginRight="1rem" />
        <Wrapper flex="1">
          <Text fontWeight="bold">{chat.name}</Text>
          <Text color="#999">{chat.lastMessage}</Text>
        </Wrapper>
        {chat.unreadCount > 0 && <Badge count={chat.unreadCount} />}
      </Wrapper>
    </Link>
  );
};

export default ChatListItem;
