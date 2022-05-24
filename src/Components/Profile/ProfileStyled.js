import styled from "styled-components";

export const ProfileLayout = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 20px;
  right: 20px;
  top: 20px;
`;
export const ProfileDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50px;
  color: white;
  height: 35px;
  width: 35px;
`;
export const Logout = styled.div`
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
