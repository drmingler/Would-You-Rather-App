import { GET_USERS } from "../actions/users";
import { ADD_ANSWERS_TO_USERS } from "../actions/users";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWERS_TO_USERS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    default:
      return state;
  }
}
