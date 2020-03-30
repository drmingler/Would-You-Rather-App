import React from "react";
import { Link } from "react-router-dom";

class QuestionChoiceCard extends React.Component {
  render() {
    const { author, optionOneText, avatar } = this.props.questionChoice;

    return (
      <div className={"choice-card-container"}>
        <h2>{`${author} Ask:`}</h2>
        <h3>{avatar}</h3>
        <div>
          <h2>Would you rather?</h2>

          <h2>{optionOneText}</h2>
          <div>
            <Link to={this.props.link}>To poll</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionChoiceCard;
