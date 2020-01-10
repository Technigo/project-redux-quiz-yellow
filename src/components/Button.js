import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import "./button.css";

//next question, summary, restart

export const Button = () => {
  const dispatch = useDispatch();

  const quizEnd = useSelector(state => state.quiz.quizOver);
  const hasAnswer = useSelector(
    state => state.quiz.answers[state.quiz.currentQuestionIndex]
  );
  const currentQuestionNumber = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex].id
  );
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);

  return (
    <>
      {!quizEnd && hasAnswer && currentQuestionNumber != numberOfQuestions && (
        <button
          className="next-button"
          type="button"
          onClick={() => dispatch(quiz.actions.goToNextQuestion())}
        >
          Next question
        </button>
      )}
      {!quizEnd && currentQuestionNumber === numberOfQuestions && (
        <button
          className="next-button"
          type="button"
          onClick={() => dispatch(quiz.actions.goToNextQuestion())}
        >
          Submit
        </button>
      )}

      {quizEnd && (
        <button
          className="restart-button"
          type="button"
          onClick={() => dispatch(quiz.actions.restart())}
        >
          Restart
        </button>
      )}
    </>
  );
};
