import styled from "styled-components";

export const ButtonPosition = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const Button = styled.button`
  outline: none;
  background: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid black;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: black;
    color: white;
  }
`;
