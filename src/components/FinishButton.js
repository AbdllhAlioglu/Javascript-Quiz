import React from "react";

export default function FinishButton({ dispatch, answer, index }) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "finishQuiz" });
      }}
    >
      Finish
    </button>
  );
}
