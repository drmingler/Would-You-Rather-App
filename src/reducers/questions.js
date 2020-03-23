import {
  GET_QUESTIONS,
  ADD_QUESTIONS_VOTE,
  ADD_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTIONS_VOTE:

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes].concat([action.authedUser])
          }
        }
      };

    default:
      return state;
  }
}
