import React from "react";

export default function NextButton({ dispatch, answer, timeRemaining }) {
  if (answer === null) return null;
  if (timeRemaining === 0) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "nextQuestion" });
      }}
    >
      Next
    </button>
  );
}
