function Progress({ index, numQuestions, point, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{point}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
