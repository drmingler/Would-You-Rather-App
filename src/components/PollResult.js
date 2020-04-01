import React from "react";
import PollResultCard from "./PollResultCard";
import { formatQuestionsResult } from "../utils/helper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import {Redirect} from "react-router-dom";

class PollResult extends React.Component {
  render() {
    const { user, authUser } = this.props;
    // TESTING
    if (!authUser) {
      return <Redirect to={"/login"} />;
    }
    const { pollResults } = this.props;
    const { name, avatarURL } = user;
    return (
      <div className={"poll-result-container"}>
        <div className={"pollcard-title"}>
          <h2>{`Asked By ${name}`}</h2>
        </div>
        <div className={"poll-grid-container"}>
          <div className={"poll-results-avatar-container"}>
            <img className={"poll-results-avatar"} src={avatarURL} alt={name} />
          </div>
          <div>
            <h2>Results:</h2>
            <ul>
              {pollResults &&
                pollResults.map(result => (
                  <li key={result.id}>
                    <PollResultCard pollResults={result} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// I will index the questions with the question Id gotten from the route
function mapStateToProps({ users, questions, authUser }, props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  return {
    authUser,
    user: question ? users[question.author] : null,
    pollResults: question ? formatQuestionsResult(question, authUser) : null
  };
}
export default connect(mapStateToProps)(PollResult);
