import React from "react";
import { ButtonContainer } from "./styles";
import { IButton } from "./types"

const Button = ({ disabled, isValid }: IButton) => {
  return (
    <ButtonContainer disabled={isValid ? false : true} isValid={isValid}>
      Entrar
    </ButtonContainer>
  );
};

export default Button;
