import React, { useState, useRef } from "react";
import Title from "./Title";
import JokeBot from "../jokebot/Jokebot";
import Background from "../background/Background";


const MainPage = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleTitleClick = () => {
    setCurrentPage("jokebot");
    console.log(currentPage);
  };

  return (
    <div className="MainPageContainer">
      {currentPage === "home" ? (
        <Background>
          <Title onClick={handleTitleClick} />
        </Background>
      ) : (
        <Background>
          <JokeBot />
        </Background>
      )}
    </div>
  );
};

export default MainPage;
