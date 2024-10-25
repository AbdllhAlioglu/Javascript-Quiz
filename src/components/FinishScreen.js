import React from "react";

export default function FinishScreen({ point, questions, dispatch }) {
  // Toplam puan
  const totalPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );

  const percentAge = Math.round((point / totalPoints) * 100);

  let emoji;
  if (percentAge === 100) {
    emoji = "🎉"; // Tam puan
  } else if (percentAge >= 75) {
    emoji = "😊"; // Yüksek başarı
  } else if (percentAge >= 50) {
    emoji = "😐"; // Orta başarı
  } else {
    emoji = "😞"; // Düşük başarı
  }

  return (
    <div className="finish-screen">
      <p className="result">
        <p className="emoji">{emoji}</p>
        <span>Your score:</span> {point} out of {totalPoints} ({percentAge}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restartQuiz" });
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}
