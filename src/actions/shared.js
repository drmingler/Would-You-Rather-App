import { addAnswersToUsers,getUsers } from "./users";
import { addQuestionVote, getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { logout } from "./authUser";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(logout());
      dispatch(hideLoading());
    });
  };
}

// answer could be option 1 or option 2
export function handleSaveQuestionAnswers(data) {
  return dispatch => {
    saveQuestionAnswer(data).then(() => {
      dispatch(addQuestionVote(data));
      dispatch(addAnswersToUsers(data));
    });
  };
}
