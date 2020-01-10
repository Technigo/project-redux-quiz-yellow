import React from "react";
import { useSelector } from "react-redux";
import { AnswerContainer } from "components/AnswerContainer";
import { Button } from "components/Button";
import { Summary } from "components/Summary";
import { ProgressCount } from "components/ProgressCount";
import { CurrentQuestion } from "components/CurrentQuestion";

export const QuizContainer = () => {
  const quizEnd = useSelector(state => state.quiz.quizOver);
  return (
    <>
      <ProgressCount />
      {!quizEnd && (
        <>
          <CurrentQuestion />
          <AnswerContainer />
        </>
      )}
      {quizEnd && <Summary />}
      <Button />
    </>
  );
};
