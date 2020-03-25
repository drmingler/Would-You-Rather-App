import React from "react";

// User choice as prop
// Percentage of vote for each option
// Number of votes and total votes
// options

class PollResultCard extends React.Component {
  render() {
    return (
        <div className={"pollcard-container"}>
            <h3> Would you like chicken or stew</h3>
            <div>
                <h3>Percentage</h3>
            </div>
            <div>
                <p>2 out of 3</p>
            </div>

        </div>
    )
  }
}


export default PollResultCard;