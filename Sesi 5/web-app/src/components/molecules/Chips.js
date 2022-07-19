import React from 'react';
import styled from 'styled-components';

const Chips = (props) => {
  return (
    <Container>
      <Text>{props.data.date}</Text>
      <Divider />
      <Text>{props.data.detail}</Text>
      <Text>
        {props.data.went} <Span>went</Span>
      </Text>
      <Button />
    </Container>
  );
};

export default Chips;

const Container = styled.div`
  max-width: 250px;
  padding-inline: 10px;
  padding-top: 5px;
  padding-bottom: 20px;
  background-color: grey;
`;

const Text = styled.p`
  font-weight: 600;
`;

const Span = styled.span`
  font-weight: 200;
`;

const Button = styled.div`
  width: 60px;
  padding: 10px;
  color: white;
  text-align: center;
  background-color: rgb(66, 66, 66);
`;

const Divider = styled.hr`
  border: 1px solid black;
`;
