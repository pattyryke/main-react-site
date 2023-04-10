import React from "react";
import "./JokeBot.scss";

const JokeBot = () => {
  return (
    <div className="jokeboxWindow">
      <div className="jokeboxResponse">
        <p>Insert joke here</p>
      </div>
      <div className="generateJokeButton">
        <button>Generate Joke</button>
      </div>
    </div>
  );
};

export default JokeBot;
