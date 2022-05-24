import React from "react";
import { BackGround, Button } from "./HomeStyled";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <BackGround>
        <Button disabled={currentUser ? false : true}>
          <Link to={"/KeyHero"}>Play Hero</Link>
        </Button>

        <Button>Leaderboard</Button>
      </BackGround>
    </>
  );
};

export default Home;
