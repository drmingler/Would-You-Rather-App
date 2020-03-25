export function formatQuestions(question){
    const {author, optionOne, optionTwo} = question;
    return {
        author : author,
        optionOne : optionOne.text,
        optionTwo : optionTwo.text,
    }
}

export function formatQuestionsResult(question, authuser) {
  const { optionOne, optionTwo } = question;
  const optionOnevotes = optionOne.votes.length;
  const optionTwovotes = optionTwo.votes.length;
  const TotalVotes = optionOnevotes + optionTwovotes;
  const optionOnePercentage = (optionOnevotes * 100) / TotalVotes;
  const optionTwoPercentage = 100 - optionOnePercentage;
  const userChoice = optionOne.votes.includes(authuser)? "optionOne" : "optionTwo";
  return [
    {
      text: optionOne.text,
      votes: optionOnevotes,
      percentage: optionOnePercentage,
      Total : TotalVotes,
      userChoice: userChoice === "optionOne" ? "optionOne" : null
    },
    {
      text: optionTwo.text,
      votes: optionTwovotes,
      percentage: optionTwoPercentage,
      Total : TotalVotes,
      userChoice: userChoice === "optionTwo" ? "optionOne" : null
    }
  ];
}

// const result = formatQuestionsResult(questions["8xf0y6ziyjabvozdd253nd"], "sarahedo");
// console.log(result.filter(content=>(
//   content.userChoice
// )));
