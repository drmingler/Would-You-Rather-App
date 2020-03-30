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
      <div>
        <h2>{`Asked By ${name}`}</h2>
        <div>
          <h2>Result</h2>
          <div>
            <p>{avatarURL}</p>
          </div>
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
