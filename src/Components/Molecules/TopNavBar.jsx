import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, IconButton } from '../Atoms';

const Nav = () => {
  return (
    <Wrapper backgroundColor="#ff3e00" color="#fff" position="fixed" top="0" left="0" right="0" padding="0.5rem">
      <Link to="/">
        <IconButton icon="flame" size="2rem" />
      </Link>
      <Link to="/chat">
        <IconButton icon="chat" size="2rem" />
      </Link>
      <Link to="/settings">
        <IconButton icon="user" size="2rem" />
      </Link>
    </Wrapper>
  );
};

export default Nav;