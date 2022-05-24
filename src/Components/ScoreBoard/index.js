import React from "react";
import {
  Position,
  Score,
  ScoreTotal,
  Title,
  Number,
  Accuracy,
} from "./ScoreStyled";

const ScoreBoard = ({ score, total }) => {
  return (
    <>
      <Position>
        <Score>
          <ScoreTotal>
            <Title>Your Score: </Title>
            <Number>{score}</Number>
          </ScoreTotal>
          <Accuracy>
            <Title>{`You've hit (${score}/${total}):`}</Title>
            <Number>
              {total === 0 ? "0%" : `${Math.floor((score / total) * 100)}%`}
            </Number>
          </Accuracy>
        </Score>
      </Position>
    </>
  );
};

export default ScoreBoard;
