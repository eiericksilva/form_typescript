import styled from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  padding: 10px;
  background-color: #b71c55;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #bf1690;
    cursor: pointer;
  }

  &:disabled {
    color: #d3d3d3;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
