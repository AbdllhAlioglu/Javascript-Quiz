import React from "react";
import Options from "./Options";

export default function Question({
  question,
  answer,
  dispatch,
  point,
  questions,
  index,
  timeRemaining,
}) {
  return (
    <div className="">
      <progress value={index + 1} max={questions.length}></progress>
      <div className="progress">
        <p>{` Question ${index + 1} / ${questions.length}`}</p>
      </div>

      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
