import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import { StartButton } from "./StartButton";

export function Title() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0 },
      { scale: 1, duration: 3, ease: Expo.easeIn, delay: 3 }
    );
  }, []);

  return (
      <div ref={titleRef} className="TitleScreen">
        <>
        <div  className="TitleRow">
          <div className="TitlePC">
            <h2>Are you ready to begin your journey?</h2>
          </div>
        </div>
          <StartButton />
        </>
      </div>
  );
}
export default Title;
