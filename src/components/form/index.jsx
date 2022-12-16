import React from "react";
import Button from "../button";
import Input from "../input";
import { Container, Title } from "./styles";

const Form = () => {
  return (
    <div>
      <Container>
        <Title>Login</Title>
        <Input />
        <Button />
      </Container>
    </div>
  );
};

export default Form;
