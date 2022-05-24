import React, { useState } from "react";
import {
  FormTemplate,
  Title,
  Span,
  Icon,
  Or,
  SpanIcon,
} from "./TemplateStyled";
import { BsGoogle } from "react-icons/bs";
import Form from "./Form";
import { useAuth } from "../../Context/AuthContext";

const SignUp = ({ toggle }) => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const { signinGoogle } = useAuth();

  const switchModule = (module) => {
    if (module === "login") {
      setLogin(true);
      setRegister(false);
    } else {
      setLogin(false);
      setRegister(true);
    }
  };
  return (
    <>
      <FormTemplate toggle={toggle}>
        <Title>
          <Span active={login} onClick={() => switchModule("login")}>
            Login
          </Span>
          <Span active={register} onClick={() => switchModule("register")}>
            Register
          </Span>
        </Title>
        <Icon>
          <SpanIcon onClick={signinGoogle}>
            <BsGoogle />
          </SpanIcon>
          <Or>Or</Or>
        </Icon>
        <Form
          active={login}
          btnTitle={"Sign In"}
          formArr={[
            { type: "email", placeholder: "Email Address" },
            { type: "password", placeholder: "Password" },
          ]}
        />
        <Form
          active={register}
          btnTitle={"Register"}
          formArr={[
            { type: "name", placeholder: "Username" },
            { type: "email", placeholder: "Email Address" },
            { type: "password", placeholder: "Password" },
          ]}
        />
      </FormTemplate>
    </>
  );
};

export default SignUp;
