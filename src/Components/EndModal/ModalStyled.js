import styled from "styled-components";

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: ${(props) => (props.end ? "visible" : "none")};
  opacity: ${(props) => (props.end ? "1" : "0")};
  transform: ${(props) =>
    props.end ? "translate(-50%, -50%)" : "translate(-50%, -90%)"};
  max-width: 440px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 20px;
  gap: 30px;
  transition: all 0.4s ease-in;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3``;
export const Accuracy = styled.h3``;
export const Score = styled.h3``;
export const BtnFlex = styled.div`
  display: flex;
  gap: 30px;
`;
export const Btn = styled.button`
  outline: none;
  background: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
`;
