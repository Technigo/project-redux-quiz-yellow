import React from "react";
import { useSelector } from "react-redux";

/*const currentQuestionNumber = useSelector(
  state => state.quiz.questions[state.quiz.currentQuestionIndex].id
);*/

export const Feedback = () => {
  const currentAnswer = useSelector(
    state => state.quiz.answers[state.quiz.currentQuestionIndex]
  );
  if (!currentAnswer) {
    return null;
  }
  return (
    <>
      {currentAnswer && currentAnswer.isCorrect ? <p>Correct</p> : <p>Wrong</p>}
    </>
  );
};
