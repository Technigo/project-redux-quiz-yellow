import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
  const submittedAnswers = useSelector(state => state.quiz.answers);

  const correctAnswers = submittedAnswers.filter(
    correctAnswer => correctAnswer.isCorrect === true
  );

  const totalCorrectAnswers = correctAnswers.length;

  //console.log(correctAnswers);
  return (
    // How many correct answers
    //text
    <p>You got {totalCorrectAnswers} out of 5!</p>
  );
};
