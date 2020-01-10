import React from "react";
import { useSelector } from "react-redux";
import "./progressCount.css";

export const ProgressCount = () => {
  const currentQuestionNumber = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].id
  );
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);
  return (
    <p className="progress">
      {currentQuestionNumber}/{numberOfQuestions}
    </p>
  );
};
