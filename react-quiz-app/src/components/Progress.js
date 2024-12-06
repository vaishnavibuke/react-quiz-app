import React from "react";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong></strong>
        {points}/{maxPossiblePoints} Points{" "}
      </p>
    </header>
  );
}

export default Progress;
