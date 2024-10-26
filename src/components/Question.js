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
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}
