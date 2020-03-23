import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const GET_QUESTIONS = "GET_QUESTIONS";
// Save the answers picked by other users for a specific question
export const ADD_QUESTIONS_ANSWERS = "ADD_QUESTIONS_ANSWERS";
// Add new questions
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export const ADD_ANSWERS_TO_USERS = "ADD_ANSWERS_TO_USERS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestionAnswers({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTIONS_ANSWERS,
    authedUser,
    qid,
    answer
  };
}

export function addAnswersToUsers({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWERS_TO_USERS,
    authedUser,
    qid,
    answer
  };
}

export function addQuestions(question) {
  return {
    type: ADD_QUESTIONS,
    question
  };
}

// answer could be option 1 or option 2
export function handleSaveQuestionAnswers({ authedUser, qid, answer }) {
  return dispatch => {
    saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(addQuestionAnswers({ authedUser, qid, answer })),
      dispatch(addAnswersToUsers({ authedUser, qid, answer }))
    );
  };
}

export function handleAddQuestions({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestions(question)))
      .then(dispatch(hideLoading()));
  };
}
