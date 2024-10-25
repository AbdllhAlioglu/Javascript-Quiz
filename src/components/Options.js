import React from "react";

export default function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => {
              dispatch({ type: "setAnswer", payload: index });
              if (index === question.correctOption) {
                dispatch({ type: "updatePoints", payload: question.points }); // Update points
              }
            }}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
