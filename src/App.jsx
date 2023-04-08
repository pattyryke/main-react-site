import React, { useRef, useEffect, useState } from "react";
import HomePage from "./components/homepage/HomePage";
import "./App.scss";
import "./components/homepage/Title.scss";

function App() {
  const appRef = useRef();
  const [appWidth, setAppWidth] = useState(0);
  const [appHeight, setAppHeight] = useState(0);

  useEffect(() => {
    const { width, height } = appRef.current.getBoundingClientRect();
    setAppWidth(width+50);
    setAppHeight(height+50);
  }, []);

  return (
    <div ref={appRef} className="App">
      <HomePage appHeight={appHeight} appWidth={appWidth} />
    </div>
  );
}

export default App;
