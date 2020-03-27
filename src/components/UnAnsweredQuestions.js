import React from "react";
import QuestionChoiceCard from "./QuestionChoiceCard";
import { questionChoiceCard } from "../utils/helper";


class UnAnsweredQuestions extends React.Component {
  render() {
    const { questionIds, questions, users } = this.props;
    return (
      <div>
        <ul>
          {questionIds.map(qid => (
            <li key={qid}>
              <QuestionChoiceCard
                questionChoice={questionChoiceCard(qid, questions, users)}
                link = {`/question/${qid}`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UnAnsweredQuestions;
