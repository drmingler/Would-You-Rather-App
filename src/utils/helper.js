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

// console.log(questionChoiceCard("loxhs1bqm25b708cmbf3g", questions,users ));

// let users = {
//   sarahedo: {
//     id: "sarahedo",
//     name: "Sarah Edo",
//     avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
//     answers: {
//       "8xf0y6ziyjabvozdd253nd": "optionOne",
//       "6ni6ok3ym7mf1p33lnez": "optionTwo",
//       am8ehyc8byjqgar0jgpub9: "optionTwo",
//       loxhs1bqm25b708cmbf3g: "optionTwo"
//     },
//     questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
//   },
//   tylermcginnis: {
//     id: "tylermcginnis",
//     name: "Tyler McGinnis",
//     avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
//     answers: {
//       vthrdm985a262al8qx3do: "optionOne",
//       xj352vofupe1dqz9emx13r: "optionTwo"
//     },
//     questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]
//   },
//   johndoe: {
//     id: "johndoe",
//     name: "John Doe",
//     avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
//     answers: {
//       xj352vofupe1dqz9emx13r: "optionOne",
//       vthrdm985a262al8qx3do: "optionTwo",
//       "6ni6ok3ym7mf1p33lnez": "optionTwo"
//     },
//     questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
//   }
// };
//
// let questions = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: "8xf0y6ziyjabvozdd253nd",
//     author: "sarahedo",
//     timestamp: 1467166872634,
//     optionOne: {
//       votes: ["sarahedo"],
//       text: "have horrible short term memory"
//     },
//     optionTwo: {
//       votes: [],
//       text: "have horrible long term memory"
//     }
//   },
//   "6ni6ok3ym7mf1p33lnez": {
//     id: "6ni6ok3ym7mf1p33lnez",
//     author: "johndoe",
//     timestamp: 1468479767190,
//     optionOne: {
//       votes: [],
//       text: "become a superhero"
//     },
//     optionTwo: {
//       votes: ["johndoe", "sarahedo"],
//       text: "become a supervillain"
//     }
//   },
//   am8ehyc8byjqgar0jgpub9: {
//     id: "am8ehyc8byjqgar0jgpub9",
//     author: "sarahedo",
//     timestamp: 1488579767190,
//     optionOne: {
//       votes: [],
//       text: "be telekinetic"
//     },
//     optionTwo: {
//       votes: ["sarahedo"],
//       text: "be telepathic"
//     }
//   },
//   loxhs1bqm25b708cmbf3g: {
//     id: "loxhs1bqm25b708cmbf3g",
//     author: "tylermcginnis",
//     timestamp: 1482579767190,
//     optionOne: {
//       votes: [],
//       text: "be a front-end developer"
//     },
//     optionTwo: {
//       votes: ["sarahedo"],
//       text: "be a back-end developer"
//     }
//   },
//   vthrdm985a262al8qx3do: {
//     id: "vthrdm985a262al8qx3do",
//     author: "tylermcginnis",
//     timestamp: 1489579767190,
//     optionOne: {
//       votes: ["tylermcginnis"],
//       text: "find $50 yourself"
//     },
//     optionTwo: {
//       votes: ["johndoe"],
//       text: "have your best friend find $500"
//     }
//   },
//   xj352vofupe1dqz9emx13r: {
//     id: "xj352vofupe1dqz9emx13r",
//     author: "johndoe",
//     timestamp: 1493579767190,
//     optionOne: {
//       votes: ["johndoe"],
//       text: "write JavaScript"
//     },
//     optionTwo: {
//       votes: ["tylermcginnis"],
//       text: "write Swift"
//     }
//   }
// };
