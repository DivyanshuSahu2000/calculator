import React from "react";
import "./buttonsContainer.css";

const Buttons = ({ handleButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <>
      <div className="buttons">
        {buttonNames.map((buttonName) => (
          <button onClick={() => handleButtonClick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
