import React from "react";
import PollResultCard from "./PollResultCard";
import { formatQuestionsResult } from "../utils/helper";
import { connect } from "react-redux";

// I need to get the question id from the route
class PollResult extends React.Component {
  render() {
    const { authorName, picture, pollResults } = this.props;
    return (
      <div>
        <h2>{`Asked By ${authorName}`}</h2>
        <div>
          <h2>Result</h2>
          <div>
            <p>{picture}</p>
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
function mapStateToProps({ users, questions, authUser }) {
  const question = questions["vthrdm985a262al8qx3do"];
  // Just for testing purpose
  if (!question) {
    return {};
  }
  const { name, avatarURL } = users[question.author];
  return {
    authorName: name,
    picture: avatarURL,
    pollResults: question ? formatQuestionsResult(question, authUser) : null
  };
}
export default connect(mapStateToProps)(PollResult);
