import React, { useState } from "react";
import { FormTemp, Input, InputButton } from "./FormStyled";
import { useAuth } from "../../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";

const Form = ({ btnTitle, formArr, active }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [success, setLogin] = useState(false);
  const [error, setError] = useState("");

  const { login, signup } = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
      setLogin(true);
    } catch (error) {
      setError(`Failed to sign-in: ${error} `);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      console.log("registered");
    } catch (error) {
      console.log("Couldnt register", error);
      setError(true);
    }
  };

  const useEmail = (e) => {
    setEmail(e.target.value);
  };
  const usePassword = (e) => {
    setPassword(e.target.value);
  };
  const useName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <FormTemp active={active}>
        {formArr.map((item, index) => {
          return (
            <Input
              key={index}
              type={item.type}
              placeholder={item.placeholder}
              onChange={
                item.type === "email"
                  ? useEmail
                  : item.type === "password"
                  ? usePassword
                  : item.type === "name"
                  ? useName
                  : null
              }
            />
          );
        })}

        <InputButton
          onClick={btnTitle === "Register" ? registerUser : loginUser}
          type={"submit"}
          value={btnTitle}
        />
      </FormTemp>
    </>
  );
};

export default Form;
