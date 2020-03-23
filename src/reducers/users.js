import { GET_USERS } from "../actions/users";

export default function(state = {}, action) {
  switch(action.type) {
      case GET_USERS:
        return {
            ...state,
            ...action.users,
        };
      default:
          return state
  }
}
