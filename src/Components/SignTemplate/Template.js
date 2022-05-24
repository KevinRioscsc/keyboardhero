import React, { useState } from "react";
import { ButtonPosition, Button } from "./TemplateStyled";
import Overlay from "../Overlay";
import SignUp from "../Template";

const Template = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ButtonPosition>
        <Button onClick={() => setToggle(true)}>Sign In</Button>
      </ButtonPosition>
      <Overlay onclick={() => setToggle(false)} toggle={toggle} />
      <SignUp toggle={toggle} />
    </>
  );
};

export default Template;
