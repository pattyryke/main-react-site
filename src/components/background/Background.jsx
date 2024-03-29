import React, { useRef } from "react";
import StarsGroup from "./StarsGroup";


const Background = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#242424",
        width: "100%",
        height: "100%",
        position: "relative", // Use relative positioning to keep the background in the flow of the document
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <StarsGroup count={0} direction={"horizontal"} />
      <StarsGroup count={0} direction={"vertical"} />
      {children}
    </div>
  );
};

export default Background;
