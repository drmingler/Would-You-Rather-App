import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
class QuestionChoiceCard extends React.Component {
  render() {
    const { author, optionOneText, avatar } = this.props.questionChoice;

    return (
      <div className={"choice-card-container"}>
        <div className={"card-title"}>
          <h2 className={"author-name"}>{`${author} Ask:`}</h2>
        </div>
        <div>
          <img className={"choice-card-avatar"} src={avatar} alt={author} />
        </div>
        <div>
          <h2 className={"card-question"}>Would you rather?</h2>
          <span className={"card-question"}>{optionOneText}</span>
          <div>
            <Link to={this.props.link}>
              <Button className={"card-button"} basic color="red">
                To poll
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionChoiceCard;
