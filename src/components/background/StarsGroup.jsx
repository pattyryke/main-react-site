import React, { useState, useLayoutEffect, ReactDOM } from "react";
import { gsap, Expo } from "gsap";
import { v4 as uuidv4 } from "uuid";
import useWindowSize from "../useWindowSize";
import Star from "./Star";

const StarsGroup = ({ count, direction }) => {
  const [stars, setStars] = useState([]);

  //console.log(useWindowSize().width, useWindowSize().height);

  let mainpageWidth = useWindowSize().width;
  let mainpageHeight = useWindowSize().height;

  useLayoutEffect(() => {
    let ctx = gsap.context(
      () => {
        const animate = (star) => {
          const tl = gsap.timeline();
          tl.to(star, {
            size: 6,
            duration: 6,
            ease: Expo.easeIn,
          }).to(
            star,
            {
              x:
                direction === "horizontal"
                  ? Math.random() < 0.5
                    ? -50
                    : mainpageWidth
                  : Math.floor(Math.random() * mainpageWidth),
              y:
                direction === "horizontal"
                  ? Math.floor(Math.random() * mainpageHeight)
                  : Math.random() < 0.5
                  ? -50
                  : mainpageHeight,
              duration: 6,
              ease: Expo.easeIn,
              onComplete: () => {
                removeStar(star.id);
              },
            },
            "-=7"
          );
        };

        // Create a new star and add it to the DOM
        const createStar = (x, y) => {
          const star = { id: uuidv4(), x, y, size: 1 };
          setStars((prevStars) => [...prevStars, star]);

          //console.log(x, y);
          animate(star);
        };

        // Remove a star from the DOM
        const removeStar = (id) => {
          setStars((prevStars) => prevStars.filter((star) => star.id !== id));
        };

        // Create the initial stars
        for (let i = 0; i < count; i++) {
          const x = (mainpageWidth / 2)+5;
          const y = (mainpageHeight / 2)+5;
          createStar(x, y);
        }

        let animationFrameId;

        // Create new stars every 3 seconds
        const animateStars = () => {
          const x = mainpageWidth / 2+5;
          const y = mainpageHeight / 2+5;
          if (x !== 0 && y !== 0) {
            createStar(x, y);
          }

          animationFrameId = requestAnimationFrame(animateStars);
        };

        animationFrameId = requestAnimationFrame(animateStars);

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      },
      mainpageHeight,
      mainpageWidth
    );

    return () => {
      cancelAnimationFrame(ctx);
    };
  }, [count, direction]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      {stars.map((star) => (
        <Star
          key={star.id}
          x={`${star.x}px`}
          y={`${star.y}px`}
          size={star.size}
        />
      ))}
    </div>
  );
};

export default StarsGroup;
