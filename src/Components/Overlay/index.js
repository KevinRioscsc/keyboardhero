import React from "react";
import { OverlayDiv } from "./OverlayStyled";

const Overlay = ({ toggle, onclick }) => {
  return (
    <>
      <OverlayDiv onClick={onclick} toggle={toggle}></OverlayDiv>
    </>
  );
};

export default Overlay;
