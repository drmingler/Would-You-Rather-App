import React from "react";

class PollResultCard extends React.Component {
  render() {
    const { pollResults } = this.props;
    return (
      <div className={"pollcard-container"}>
        {pollResults.userChoice && <p>Your Choice</p>}
        <h3>{pollResults.text}</h3>
        <div>
          <h3>{pollResults.percentage}</h3>
        </div>
        <div>
          <p>
            {pollResults.votes} out of {pollResults.total}
          </p>
        </div>
      </div>
    );
  }
}

export default PollResultCard;
