import React from "react";
import { useSelector } from "react-redux";

export const ProgressCount = () => {
  const currentQuestionNumber = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].id
  );
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);
  return (
    <p>
      {currentQuestionNumber}/{numberOfQuestions}
    </p>
  );
};
