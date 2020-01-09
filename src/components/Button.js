import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

//next question, summary, restart

export const Button = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(quiz.actions.goToNextQuestion())}
    >
      Next question
    </button>
  );
};
