import React, { useState, useLayoutEffect } from "react";
import { gsap, Expo } from "gsap";
import Star from "./Star";
import { v4 as uuidv4 } from "uuid";
import Box from "../../../Box";

const StarsGroup = ({ count, direction, appHeight, appWidth }) => {
  const [stars, setStars] = useState([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      console.log(appWidth, appHeight);
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
                  : appWidth
                : Math.floor(Math.random() * appWidth),
            y:
              direction === "horizontal"
                ? Math.floor(Math.random() * appHeight)
                : Math.random() < 0.5
                ? -50
                : appHeight,
            duration: 6,
            ease: Expo.easeIn,
            onComplete: () => {
              removeStar(star.id);
            },
          },
          "-=6"
        );
      };

      // Create a new star and add it to the DOM
      const createStar = (x, y) => {
        const star = { id: uuidv4(), x, y, size: 1 };
        setStars((prevStars) => [...prevStars, star]);

        animate(star);
      };

      // Remove a star from the DOM
      const removeStar = (id) => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
      };

      // Create the initial stars
      for (let i = 0; i < count; i++) {
        const x = (appWidth / 2);
        const y = (appHeight / 2);
        createStar(x, y);
      }

      let animationFrameId;

      // Create new stars every 3 seconds
      const animateStars = () => {
        const x = (appWidth / 2)-25;
        const y = (appHeight / 2)-25;
        if (x !== 0 && y !== 0) {
          createStar(x, y);
        }

        animationFrameId = requestAnimationFrame(animateStars);
      };

      animationFrameId = requestAnimationFrame(animateStars);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    });

    return () => {
      cancelAnimationFrame(ctx);
    };
  }, [count, direction, appHeight, appWidth]);

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
