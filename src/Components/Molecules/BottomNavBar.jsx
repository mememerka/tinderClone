import React from 'react';
import IconButton from '../molecules/IconButton';
import { Wrapper } from '../Atoms';

const Nav = ({ onHeartClick, onStarClick, onCrossClick }) => {
  return (
    <Wrapper backgroundColor="#fff" boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)" position="fixed" bottom="0" width="100%" padding="1rem">
      <IconButton
        icon="heart"
        onClick={onHeartClick}
        color="primary"
        size="3rem"
      />
      <IconButton
        icon="star"
        onClick={onStarClick}
        color="secondary"
        size="3rem"
      />
      <IconButton
        icon="cross"
        onClick={onCrossClick}
        color="tertiary"
        size="3rem"
      />
    </Wrapper>
  );
};

export default Nav;
