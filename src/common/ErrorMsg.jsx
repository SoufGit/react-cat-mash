import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMsg = () => {
  return (
    <Message negative>
      <Message.Header>Oups!</Message.Header>
      <p>An error occured! Please try again!</p>
    </Message>
  );
};

export default ErrorMsg;
