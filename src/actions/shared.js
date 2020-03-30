import { addQuestionIdToUsers, addAnswersToUsers, getUsers } from "./users";
import { addQuestion, addQuestionVote, getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
// import {setAuthUser} from "./authUser";
// import { logOut } from "./authUser";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      // dispatch(setAuthUser("sarahedo"));
      // dispatch(logOut());
      dispatch(hideLoading());
    });
  };
}

// Answer could be option 1 or option 2
export function handleSaveQuestionAnswers(data) {
  return dispatch => {
    saveQuestionAnswer(data).then(() => {
      dispatch(addQuestionVote(data));
      dispatch(addAnswersToUsers(data));
    });
  };
}

/* Adds the id of the question to the user that created the question
 and also adds the new question to the list of available questions */
export function handleAddQuestions({
  optionOneText,
  optionTwoText,
  authedUser
}) {
  return (dispatch)=> {
    dispatch(showLoading());
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionIdToUsers(authedUser, question.id));
      })
      .then(dispatch(hideLoading()));
  };
}
