import React from "react";

export default function StartScreen({ count, dispatch, answer, index }) {
  const handleClick = () => {
    dispatch({ type: "startQuiz" });
  };

  return (
    <div className="start">
      <img src="/jsicon.svg" alt="JavaScript Icon" />
      <h2> Welcome to JavaScript Quiz!</h2>
      <h3> {count} question to test your JS mastery</h3>

      <button className="btn btn-ui" onClick={handleClick}>
        Let's Start
      </button>
    </div>
  );
}
