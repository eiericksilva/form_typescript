import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #191d3a;
    outline: none;
  }

  span {
    color: #ff0000;
    font-size: 12px;
    position: relative;
    top: -21px;
    left: 7px;
  }
`;
