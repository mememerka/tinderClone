import React from 'react';
import { Button, Icon } from '../Atoms';

const IconButton = ({ icon, onClick, ...props }) => {
  return (
    <Button onClick={onClick} borderRadius="50%" padding="0.5rem" {...props}>
      <Icon name={icon} />
    </Button>
  );
};

export default IconButton;