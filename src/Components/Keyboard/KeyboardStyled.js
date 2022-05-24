import styled from "styled-components";

export const KeyBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;
export const Row = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;
export const Li = styled.li`
  height: 3em;
  width: 3em;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.4em;
  line-height: 3em;
  letter-spacing: 1px;
  margin: 0.4em;
  transition: 0.3s;
  text-align: center;
  font-size: 1em;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
`;
