import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";

const animateElement = (element) => {};

export function Title() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0 },
      { scale: 1, duration: 3, ease: Expo.easeIn, delay: 5 }
    );
  }, []);

  return (
    <div className="TitleScreen">
      <div ref={titleRef} className="TitleRow">
        <div className="TitlePC">
          <h1>Patrick</h1>
          <h1>Capovilla</h1>
        </div>
        <h1>.com</h1>
      </div>
    </div>
  );
}
export default Title;
