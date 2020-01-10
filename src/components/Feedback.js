import React from "react";
import { useSelector } from "react-redux";

export const Feedback = () => {
  const currentAnswer = useSelector(
    state => state.quiz.answers[state.quiz.currentQuestionIndex]
  );
  if (!currentAnswer) {
    return null;
  }
  return (
    <>{currentAnswer && currentAnswer.isCorrect ? <p>👍</p> : <p>👎</p>}</>
  );
};
