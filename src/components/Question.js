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
        <p className="highscore">
          {`${point} / ${questions.reduce(
            (total, question) => total + question.points,
            0
          )} points`}
        </p>
      </div>

      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
