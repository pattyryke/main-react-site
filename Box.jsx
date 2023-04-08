import React from "react";
import "./Box.scss";

const Box = () => {
  return (
    <div className="box-container">
      <div className="box" style={{ width: `10px`, height: `10px`, zIndex: "9999" }} />
    </div>
  );
};

export default Box;
