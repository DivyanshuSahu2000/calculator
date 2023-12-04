import React from "react";
import "./display.css";

const Display = ({ displayValue }) => {
  return (
    <>
      <div>
        <input type="text" className="display" value={displayValue} readOnly />
      </div>
    </>
  );
};

export default Display;
