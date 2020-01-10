import React from "react";
import { Provider, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import { AnswerContainer } from "components/AnswerContainer";
import { Button } from "components/Button";
import { Summary } from "components/Summary";
import { ProgressCount } from "components/ProgressCount";

import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  // const quizEnd = useSelector(state => state.quiz.quizOver);

  return (
    <Provider store={store}>
      <ProgressCount />
      <CurrentQuestion />
      <AnswerContainer />

      <Summary />
      <Button />
    </Provider>
  );
};
