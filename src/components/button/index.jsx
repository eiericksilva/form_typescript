import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ disabled, isValid }) => {
  return (
    <ButtonContainer disabled isValid={isValid}>
      Entrar
    </ButtonContainer>
  );
};

export default Button;
