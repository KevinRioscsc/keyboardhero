import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Template from "./Components/SignTemplate/Template";
import KeyBoard from "./Pages/KeyBoard";
import { useAuth } from "./Context/AuthContext";
import Profile from "./Components/Profile";

const RoutesPage = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser ? <Profile /> : <Template />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/KeyHero" element={<KeyBoard />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
