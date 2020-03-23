import {
  GET_QUESTIONS,
  ADD_QUESTIONS_VOTE,
  ADD_QUESTIONS
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTIONS_VOTE:
      const vote = [...state[action.qid][action.answer].votes];
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: vote.includes(action.authedUser)
              ? vote
              : vote.concat([action.authedUser])
          }
        }
      };
    case ADD_QUESTIONS:
      return {
        ...state,
        [action.question.id]: {...action.question}
      };


    default:
      return state;
  }
}
