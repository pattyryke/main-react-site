import React, {useEffect, useRef} from "react";
import { gsap, Power1 } from "gsap";

export function StartButton() {
    const buttonRef = useRef();

    useEffect(() => {
        gsap.to(
          buttonRef.current,
          { duration: 0.5, y: -25, ease: Power1.easeOut, delay: 6, yoyo: true, repeat: -1 }
        );
    }, [])

  return (
    <>
      <button ref={buttonRef} id="titleStartButton">START</button>
    </>
  );
}
