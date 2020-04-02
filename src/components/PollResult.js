import React from "react";
import PollResultCard from "./PollResultCard";
import { formatQuestionsResult } from "../utils/helper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PollResult extends React.Component {
  render() {
    const { user, authUser } = this.props;

    if (!authUser) {
      return <Redirect to={"/login"} />;
    }

    const { pollResults } = this.props;
    // Get the name and avatar from the user object
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

/* Get the question id as props from the poll route
* Get users, questions and the authorised user from the store*/
function mapStateToProps({ users, questions, authUser }, props) {
  // Get the specific question that is being accessed from the route
  const { question_id } = props.match.params;
  // Index the questions with the question Id gotten from the route
  const question = questions[question_id];
  return {
    authUser,
    user: question ? users[question.author] : null,
    // formatQuestionsResult helper function presents the poll result in a usable format
    pollResults: question ? formatQuestionsResult(question, authUser) : null
  };
}
export default connect(mapStateToProps)(PollResult);
