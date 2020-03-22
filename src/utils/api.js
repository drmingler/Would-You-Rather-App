import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA";

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}

export function saveQuestion(data) {
  return _saveQuestion(data);
}

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}
