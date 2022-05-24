import styled from "styled-components";

export const FormTemp = styled.form`
  display: ${(props) => (props.active ? "unset" : "none")};
`;
export const Input = styled.input`
  margin-bottom: 30px;
  border: 2px solid rgb(205, 220, 224);
  color: rgb(75, 75, 75);
  width: 100%;
  transition: border-color 0.3s ease-in-out 0s;
  height: 60px;
  padding: 0px 20px;
  border-radius: 4px;
  background-color: transparent;
  box-sizing: border-box;
`;
export const InputButton = styled.input`
  outline: none;
  width: 100%;
  padding: 0px 20px;
  border-radius: 4px;
  height: 60px;
  background-color: transparent;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    background: black;
    color: white;
  }
`;
