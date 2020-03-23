import {
  GET_QUESTIONS,
  ADD_QUESTIONS_ANSWERS,
  ADD_QUESTIONS,
  ADD_ANSWERS_TO_USERS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTIONS_ANSWERS:

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.answer],
            votes: [...state[action.qid][action.answer].votes].concat([action.authedUser])
          }
        }
      };

    case ADD_ANSWERS_TO_USERS:
      return{

      };
    default:
      return state;
  }
}
