import { addQuestionIdToUsers, addAnswersToUsers, getUsers } from "./users";
import { addQuestion, addQuestionVote, getQuestions } from "./questions";
import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";

/* Get the initial data from the database*/
export function handleInitialData() {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

/* Adds the votes to the specific  question that has the vote and also 
adds the new answer and the question id  to the user that answred the question */
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
  return dispatch => {
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(addQuestionIdToUsers(authedUser, question.id));
    });
  };
}
