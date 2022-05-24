import React from "react";
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const SelectRandom = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max + min);
  };
  const SelectNumber = () => {
    return keys[randomNumber(0, keys.length - 1)];
  };
  const animateKey = () => {
    const highlightKey = document.getElementById(SelectNumber());
    highlightKey.classList.add("selected");
  };

  return { animateKey };
};

export default SelectRandom;
