import React from 'react';
import Swipeable from 'react-swipeable';
import Card from './Card';

const CardSwipeable = ({ users, onSwipe, onSwiping, likesLeft }) => {
  const handleSwipe = (direction, index) => {
    const newUsers = [...users];
    if (direction === 'left') {
      newUsers[index].swiped = 'nope';
    } else if (direction === 'right') {
      newUsers[index].swiped = 'like';
    } else if (direction === 'up') {
      newUsers[index].swiped = 'superlike';
    }
    onSwipe(direction, index, newUsers);
  };

  return (
    <div>
      {users.map((user, index) => (
        <Swipeable
          key={user.email}
          onSwiping={(event, deltaX) => onSwiping(deltaX)}
          onSwiped={(event, deltaX) => {
            if (Math.abs(deltaX) > 100) {
              handleSwipe(
                deltaX > 0 ? 'right' : deltaX < 0 ? 'left' : 'up',
                index
              );
            } else {
              onSwiping(0);
            }
          }}
        >
          <Card
            imageSrc={user.picture.large}
            title={`${user.name.first} ${user.name.last}, ${user.dob.age}`}
            onSwipe={(direction) => handleSwipe(direction, index)}
            onSwiping={onSwiping}
            swiped={user.swiped}
            likesLeft={likesLeft}
          />
        </Swipeable>
      ))}
    </div>
  );
};

export default CardSwipeable;