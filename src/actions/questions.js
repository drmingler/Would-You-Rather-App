

export const GET_QUESTIONS = "GET_QUESTIONS";
// Save the answers picked by other users for a specific question
export const ADD_QUESTIONS_VOTE = "ADD_QUESTIONS_ANSWERS";
// Add new questions
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestionVote({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTIONS_VOTE,
    authedUser,
    qid,
    answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTIONS,
    question
  };
}


