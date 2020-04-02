import React from "react";
import QuestionChoiceCard from "./QuestionChoiceCard";
import { questionChoiceCard } from "../utils/helper";

/* questionChoiceCard is a helper
function that presents each user
information in a usable format */

class AnsweredQuestions extends React.Component {
  render() {
    /* Get the list of all questions that have 
      already been answered and also the list of all
      questions, and users from the Dashboard component */
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
                link={`/poll/${question.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnsweredQuestions;
