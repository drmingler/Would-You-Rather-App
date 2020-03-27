import React from "react";

class ScoreCard extends React.Component {
  render() {
    return (
      <div className={"scorecard-container"}>
        <h1>Sarah Edo</h1>
        <div>
          <h4> Answered Questions</h4>
          <h4> Created Questions</h4>
        </div>
        <div>
          <h1> Score </h1>
          <h1> Total score </h1>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
