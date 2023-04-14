import React, { useState } from 'react';
import { Wrapper } from '../Atoms';
import Card from '../Molecules/Card';

const CardStack = ({ users }) => {
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);

  const handleSwipe = (direction, user) => {
    if (direction === 'right') {
      setLikedUsers([...likedUsers, user]);
    } else if (direction === 'left') {
      setDislikedUsers([...dislikedUsers, user]);
    }
  };

  return (
    <Wrapper display="flex" flexDirection="column" alignItems="center">
      {users.map((user, index) => (
        <Card
          key={user.id.value}
          imageSrc={user.picture.large}
          title={`${user.name.first} ${user.name.last}, ${user.dob.age}`}
          onSwipe={(direction) => handleSwipe(direction, user)}
        />
      ))}
    </Wrapper>
  );
};

export default CardStack;

