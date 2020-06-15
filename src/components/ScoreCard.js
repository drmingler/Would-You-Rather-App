import React from "react";

class ScoreCard extends React.Component {
  render() {
    // Get score information from the the LeaderBoard component
    const {
      name,
      totalScore,
      noOfAnsweredQuestion,
      noOfAskedQuestion,
      avatar
    } = this.props;
    return (
      <div className={"scorecards"}>
        <div className={"scorecard-avatar-container"}>
          <img className={"scorecard-avatar"} src={avatar} alt={name} />
        </div>
        <div className={"scorecard-info"}>
          <h1>{name}</h1>
          <div className={"score-result"}>
            <h4 > Answered Questions </h4>
            <span className={"scorecard-number"}>{noOfAnsweredQuestion}</span>
          </div>
          <div className={"score-result"}>
            <h4> Created Questions</h4>
            <span className={"scorecard-number"}>{noOfAskedQuestion}</span>
          </div>
        </div>
        <div className={"score-container"}>
          <div className={"score-title"}>
            <h4> Score </h4>
          </div>
          <div className={"total-score"}>
            <h1> {totalScore} </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
