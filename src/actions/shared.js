import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
