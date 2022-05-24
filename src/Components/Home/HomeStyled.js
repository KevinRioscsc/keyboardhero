import styled from "styled-components";

export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
