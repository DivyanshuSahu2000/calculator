import React from "react";
import Display from "./components/display";
import Buttons from "./components/buttonsContainer";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal(" ");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className="main">
      <div className="calculator">
        <Display displayValue={calVal} />
        <Buttons handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
