import styled from "styled-components";

export const OverlayDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  background: rgba(0, 0, 0, 0.292);
  pointer-events: ${(props) => (props.toggle ? "visible" : "none")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
