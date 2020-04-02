import React from "react";
import { connect } from "react-redux";
import { formatScoreCard } from "../utils/helper";
import ScoreCard from "./ScoreCard";
import { Redirect } from "react-router-dom";
class LeaderBoard extends React.Component {
  render() {
    const { users, authUser } = this.props;

    if (!authUser) {
      return <Redirect to={"/login"} />;
    }
    // const userScores = users ? formatScoreCard(users) : null;
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

function mapStateToProps({ users, authUser }) {
  return { users, authUser };
}
export default connect(mapStateToProps)(LeaderBoard);
