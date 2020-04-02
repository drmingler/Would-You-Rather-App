import React from "react";
import QuestionChoiceCard from "./QuestionChoiceCard";
import { questionChoiceCard } from "../utils/helper";

class UnAnsweredQuestions extends React.Component {
  render() {
    /* Get the list of all questions that have not
   been answered and also the list of all questions,
   and users from the Dashboard component */
    const { sortedQuestions, questions, users } = this.props;
    return (
      <div>
        <ul>
          {sortedQuestions.map(question => (
            <li className={"card"} key={question.id}>
              <QuestionChoiceCard
                questionChoice={questionChoiceCard(
                  question.id,
                  questions,
                  users
                )}
                link={`/questions/${question.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UnAnsweredQuestions;
