import React from "react";
import QuestionChoiceCard from "./QuestionChoiceCard";
import { questionChoiceCard } from "../utils/helper";


class UnAnsweredQuestions extends React.Component {
  render() {
    const { sortedQuestions, questions, users } = this.props;
    return (
      <div>
        <ul>
          {sortedQuestions.map(question => (
            <li key={question.id}>
              <QuestionChoiceCard
                questionChoice={questionChoiceCard(question.id, questions, users)}
                link = {`/questions/${question.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UnAnsweredQuestions;
