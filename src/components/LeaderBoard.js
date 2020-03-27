import React from "react";
import { connect } from "react-redux";
import { formatScoreCard } from "../utils/helper";
import ScoreCard from "./ScoreCard";
class LeaderBoard extends React.Component {
  render() {
    const { users } = this.props;
    console.log(users);
    // const userScores = users ? formatScoreCard(users) : null;
    const userScores = formatScoreCard(users);
    return (
      <div>
        <ul>
          {userScores.map(score => (
            <li key={score.user}>
              <ScoreCard
                totalScore={score.totalScore}
                noOfAnsweredQuestion={score.noOfAnsweredQuestion}
                noOfAskedQuestion={score.noOfAskedQuestion}
                name={score.name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}
export default connect(mapStateToProps)(LeaderBoard);
