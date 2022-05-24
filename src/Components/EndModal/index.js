import React from "react";
import { ModalDiv, Title, Accuracy, Score, BtnFlex, Btn } from "./ModalStyled";

const Modal = ({ total, score, end, reset }) => {
  return (
    <div>
      <ModalDiv end={end}>
        <Title>Congratulations!</Title>
        <Accuracy>{`Your Accuracy: ${Math.ceil(
          (score / total) * 100
        )}%`}</Accuracy>
        <Score>{`Score: ${score}`}</Score>
        <BtnFlex>
          <Btn onClick={reset}>Play again</Btn>
          <Btn>LeaderBoard</Btn>
        </BtnFlex>
      </ModalDiv>
    </div>
  );
};

export default Modal;
