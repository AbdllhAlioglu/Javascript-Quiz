import React from "react";

export default function Timer({ timeRemaining }) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
