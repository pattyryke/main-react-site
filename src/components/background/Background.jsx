import React, { useRef } from "react";
import StarsGroup from "./StarsGroup";

const Background = ({ children, appHeight, appWidth }) => {
  const backgroundRef = useRef(null);
  return (
    <div
      ref={backgroundRef}
      style={{
        backgroundColor: "#242424",
        width: "100%",
        height: "100%",
        position: "relative", // Use relative positioning to keep the background in the flow of the document
        left: 0,
        top: 0,
      }}
    >
      <StarsGroup count={0} appHeight={appHeight} appWidth={appWidth} direction={"horizontal"} />
      <StarsGroup count={0} appHeight={appHeight} appWidth={appWidth} direction={"vertical"} />
      {children}
    </div>
  );
};

export default Background;
