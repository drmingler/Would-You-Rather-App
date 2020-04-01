import React from "react";
import { Progress } from "semantic-ui-react";

class PollResultCard extends React.Component {
  render() {
    const { pollResults } = this.props;
    return (
      <div
        className={"pollcard-container"}
        style={
          pollResults.userChoice
            ? {
                background: "rgba(202, 80, 79, 0.2)",
                border: "1px solid #ca504f"
              }
            : null
        }
      >
        <h3> {`Would you rather  ${pollResults.text}?`}</h3>
        <div>
          <Progress
            percent={pollResults.percentage}
            progress
          />
        </div>
        <div>
          <h4>
            {pollResults.votes} out of {pollResults.total}
          </h4>
        </div>
      </div>
    );
  }
}


export default PollResultCard;
