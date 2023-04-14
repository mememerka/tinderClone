import React from 'react';
import { Image, Text, Wrapper } from '../Atoms';

const Card = ({ imageSrc, title, children, ...props }) => {
  return (
    <Wrapper
      backgroundColor="#fff"
      borderRadius="5px"
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      {...props}
    >
      <Image src={imageSrc} alt="" />
      <Wrapper padding="1rem">
        <Text as="h2" fontWeight="bold" marginBottom="0.5rem">
          {title}
        </Text>
        {children}
      </Wrapper>
    </Wrapper>
  );
};

export default Card;
