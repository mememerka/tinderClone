import React from 'react';
import { List, ListItem, Avatar, Badge } from '../molecules';

const ChatList = ({ users, activeUser, onChatSelected }) => {
  return (
    <List>
      {users.map(user => (
        <ListItem
          key={user.email}
          onClick={() => onChatSelected(user)}
          alignItems="center"
        >
          <Avatar src={user.picture.thumbnail} alt={user.name.first} />
          <div style={{ flexGrow: 1, marginLeft: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold' }}>
                {user.name.first} {user.name.last}
              </div>
              {user === activeUser && (
                <Badge marginLeft="1rem" color="green">
                  Active
                </Badge>
              )}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#888' }}>
              {user.chatMessages[user.chatMessages.length - 1].message}
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
