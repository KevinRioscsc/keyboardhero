import styled from "styled-components";

export const FormTemplate = styled.div`
  max-width: 440px;
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  transform: ${(props) =>
    props.toggle ? "translate(-50%, -50%)" : "translate(-50%, -90%)"};
  pointer-events: ${(props) => (props.toggle ? "visible" : "none")};
  background: white;
  border-radius: 5px;
  height: auto;
  padding: 30px;
  width: 100%;
  transition: all 0.3s ease-in-out 0s;
`;
export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const Form = styled.form``;
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
export const Span = styled.span`
  cursor: pointer;
  padding: 0 20px;

  position: relative;
  &::after {
    content: "";
    width: ${(props) => (props.active ? "100%" : "0")};
    position: absolute;
    bottom: 0;
    left: ${(props) => (props.active ? "0" : "50%")};
    height: 1px;
    background: black;
    transition: all 0.4s cubic-bezier(0.4, 0, 1, 1) 0s;
  }
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Or = styled.p``;
export const SpanIcon = styled.span`
  background: black;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 100px;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    background-color: white;
    color: green;
  }
`;
