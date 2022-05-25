import React, { useEffect, useRef, useState } from "react";
import { KeyBoard, Row, Li } from "./KeyboardStyled";
import SelectRandom from "./SelectRandom";
import ScoreBoard from "../ScoreBoard";
import Modal from "../EndModal";
import { useAuth } from "../../Context/AuthContext";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

const Keyboard = () => {
  const { currentUser } = useAuth();

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);

  const myInterval = useRef();
  const myTimeout = useRef();

  const { animateKey } = SelectRandom();
  const keyPressed = (e) => {
    const key = e.key.toUpperCase();
    setTotal((prev) => prev + 1);
    const hitKey = document.getElementById(key);
    const highlighted = document.querySelector(".selected");
    hitKey.classList.add("hit");
    hitKey.addEventListener("animationend", () => {
      hitKey.classList.remove("hit");
    });

    if (highlighted.innerHTML === key) {
      setScore((prev) => prev + 1);
      highlighted.classList.add("right");
      highlighted.addEventListener("animationend", () => {
        highlighted.classList.remove("right");
      });
      highlighted.classList.remove("selected");
      animateKey();
    } else {
      highlighted.classList.add("wrong");
      highlighted.addEventListener("animationend", () => {
        highlighted.classList.remove("wrong");
      });
      highlighted.classList.remove("selected");
      animateKey();
    }
  };

  const reset = () => {
    setScore(0);
    setTotal(0);
    setEnd(false);
    startGame();
  };

  const endGame = () => {
    fetch("http://localhost:3001/addLeader", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.displayName,
        total: score,
        datetotal: today,
      }),
    })
      .then((res) => res.json())
      .then((me) => console.log(me))
      .catch((err) => console.log(err));
    clearInterval(myInterval.current);
    setEnd(true);
  };

  const startGame = () => {
    myInterval.current = setInterval(() => {
      const highlighted = document.querySelector(".selected");
      highlighted.classList.remove("selected");
      setTotal((prev) => prev + 1);
      animateKey();
    }, 3000);

    myTimeout.current = setTimeout(endGame, 120000);
  };

  useEffect(() => {
    window.addEventListener("keyup", keyPressed);

    animateKey();

    startGame();

    return () => {
      clearInterval(myInterval.current);
      clearTimeout(myTimeout.current);
      window.removeEventListener("keyup", keyPressed);
    };
  }, []);
  return (
    <>
      <ScoreBoard score={score} total={total} />
      <KeyBoard>
        <Row>
          <Li>ESC</Li>
          <Li>1</Li>
          <Li>2</Li>
          <Li>3</Li>
          <Li>4</Li>
          <Li>5</Li>
          <Li>6</Li>
          <Li>7</Li>
          <Li>8</Li>
          <Li>9</Li>
          <Li>0</Li>
          <Li>-</Li>
          <Li>+</Li>
          <Li id="back">BACK</Li>
        </Row>
        <Row>
          <Li id="tab">Tab</Li>
          <Li id="Q">Q</Li>
          <Li id="W">W</Li>
          <Li id="E">E</Li>
          <Li id="R">R</Li>
          <Li id="T">T</Li>
          <Li id="Y">Y</Li>
          <Li id="U">U</Li>
          <Li id="I">I</Li>
          <Li id="O">O</Li>
          <Li id="P">P</Li>
          <Li>[</Li>
          <Li>]</Li>
          <Li>\</Li>
        </Row>
        <Row>
          <Li id="caps">CAPS</Li>
          <Li id="A">A</Li>
          <Li id="S">S</Li>
          <Li id="D">D</Li>
          <Li id="F">F</Li>
          <Li id="G">G</Li>
          <Li id="H">H</Li>
          <Li id="J">J</Li>
          <Li id="K">K</Li>
          <Li id="L">L</Li>
          <Li>:</Li>
          <Li>''</Li>
          <Li id="enter">ENTER</Li>
        </Row>
        <Row>
          <Li id="shift">SHIFT</Li>
          <Li id="Z">Z</Li>
          <Li id="X">X</Li>
          <Li id="C">C</Li>
          <Li id="V">V</Li>
          <Li id="B">B</Li>
          <Li id="N">N</Li>
          <Li id="M">M</Li>
          <Li>,</Li>
          <Li>.</Li>
          <Li>;</Li>
          <Li id="shift">SHIFT</Li>
        </Row>
      </KeyBoard>

      <Modal score={score} total={total} end={end} reset={reset} />
    </>
  );
};

export default Keyboard;
