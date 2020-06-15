import React from "react";
import { connect } from "react-redux";
import { formatScoreCard } from "../utils/helper";
import ScoreCard from "./ScoreCard";

class LeaderBoard extends React.Component {
  render() {
    const { users } = this.props;

    /* formatScoreCard helper function helps to present the data
     needed by the scorecard component in an easy to use format */
    const userScores = formatScoreCard(users);
    return (
      <ul className={"scorecard-container"}>
        {userScores.map(score => (
          <li key={score.user}>
            <ScoreCard
              totalScore={score.totalScore}
              noOfAnsweredQuestion={score.noOfAnsweredQuestion}
              noOfAskedQuestion={score.noOfAskedQuestion}
              name={score.name}
              avatar={score.avatar}
            />
          </li>
        ))}
      </ul>
    );
  }
}

// Get the list of all the users and the presently authorised user for the store
function mapStateToProps({ users, authUser }) {
  return { users, authUser };
}
export default connect(mapStateToProps)(LeaderBoard);
