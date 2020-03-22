import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

const GET_QUESTIONS = "GET_QUESTIONS";
// Save the answers picked by other users for a specific question
const SAVE_QUESTIONS_ANSWERS = "SAVE_QUESTIONS_ANSWERS";
// Add new questions
const ADD_QUESTIONS = "ADD_QUESTIONS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function saveQuestionAnswers({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTIONS_ANSWERS,
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

export function handleSaveQuestionAnswers({ authedUser, qid, answer }) {
  return dispatch => {
    saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(saveQuestionAnswers({ authedUser, qid, answer }))
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
