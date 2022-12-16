import React from "react";
import { InputContainer } from "./styles";

const Input = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
    </InputContainer>
  );
};

export default Input;
