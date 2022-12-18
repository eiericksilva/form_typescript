import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ disabled, isValid }) => {
  return (
    <ButtonContainer disabled={isValid ? false : true} isValid={isValid}>
      Entrar
    </ButtonContainer>
  );
};

export default Button;
