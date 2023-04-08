import React from "react";
import Background from "../background/Background";
import Title from "./Title";

export function HomePage({ appHeight, appWidth }) {
  return (
    <Background appHeight={appHeight} appWidth={appWidth}>
      <Title />
    </Background>
  );
}
export default HomePage;
