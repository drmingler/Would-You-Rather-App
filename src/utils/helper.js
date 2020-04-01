import React from "react";

export function formatQuestions(question, users) {
  const { author, optionOne, optionTwo } = question;
  const authorName = users[author].name;
  return {
    author: authorName,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text
  };
}

export function formatQuestionsResult(question, authuser) {
  const { optionOne, optionTwo } = question;
  const optionOnevotes = optionOne.votes.length;
  const optionTwovotes = optionTwo.votes.length;
  const TotalVotes = optionOnevotes + optionTwovotes;
  const optionOnePercentage = (optionOnevotes * 100) / TotalVotes;
  const optionTwoPercentage = 100 - optionOnePercentage;
  const userChoice = optionOne.votes.includes(authuser)
    ? "optionOne"
    : "optionTwo";
  return [
    {
      id: "optionOne",
      text: optionOne.text,
      votes: optionOnevotes,
      percentage: optionOnePercentage.toFixed(2),
      total: TotalVotes,
      userChoice: userChoice === "optionOne" ? "optionOne" : null
    },
    {
      id: "optionTwo",
      text: optionTwo.text,
      votes: optionTwovotes,
      percentage: optionTwoPercentage.toFixed(2),
      total: TotalVotes,
      userChoice: userChoice === "optionTwo" ? "optionOne" : null
    }
  ];
}

export function formatScoreCard(users) {
  return Object.keys(users)
    .map(user => {
      const { answers, questions, name } = users[user];
      const noOfAnsweredQuestion = Object.keys(answers).length;
      const noOfAskedQuestion = questions.length;
      const totalScore = noOfAnsweredQuestion + noOfAskedQuestion;
      return {
        name,
        totalScore,
        noOfAnsweredQuestion,
        noOfAskedQuestion,
        user
      };
    })
    .sort((a, b) => b.totalScore - a.totalScore);
}

export function questionChoiceCard(questionId, questions, users) {
  const { author, optionOne } = questions[questionId];
  const user = users[author];
  const { name, avatarURL } = user;
  return {
    author: name,
    optionOneText: optionOne.text,
    avatar: avatarURL
  };
}

export function sortQuestions(questions, user) {
  const sortedQuestion = Object.keys(questions)
    .map(qid => questions[qid])
    .sort((a, b) => b.timestamp - a.timestamp);
  const answeredQuestionsId = Object.keys(user.answers);
  const unansweredQuestions = sortedQuestion.filter(
    question => !answeredQuestionsId.includes(question.id)
  );
  const answeredQuestions = sortedQuestion.filter(question =>
    answeredQuestionsId.includes(question.id)
  );
  return { unansweredQuestions, answeredQuestions };
}

export function loginDropDown(users) {
  return Object.keys(users).map(user => ({
    key: users[user].id,
    text: users[user].name,
    value: users[user].id,
    image: { avatar: true, src: users[user].avatarURL }
  }));
}
