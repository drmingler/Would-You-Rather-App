export const GET_USERS = "GET_USERS";
export const ADD_ANSWERS_TO_USERS = "ADD_ANSWERS_TO_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTIONS_TO_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
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

export function addQuestionIdToUsers(authedUser, qid) {
  return {
    type : ADD_QUESTION_TO_USER,
    qid,
    authedUser,
  };
}
