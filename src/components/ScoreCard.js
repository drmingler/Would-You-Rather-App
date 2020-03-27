import React from "react";

class ScoreCard extends React.Component {
  render() {
    const {
      name,
      totalScore,
      noOfAnsweredQuestion,
      noOfAskedQuestion
    } = this.props;
    return (
      <div className={"scorecard-container"}>
        <h1>{name}</h1>
        <div>
          <div>
            <h4> Answered Questions</h4>
            <p>{noOfAnsweredQuestion}</p>
          </div>
          <div>
            <h4> Created Questions</h4>
            <p>{noOfAskedQuestion}</p>
          </div>
        </div>
        <div>
          <h1> Score </h1>
          <h1> {totalScore} </h1>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
