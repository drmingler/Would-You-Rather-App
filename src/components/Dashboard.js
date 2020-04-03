import React from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import { connect } from "react-redux";
import { sortQuestions } from "../utils/helper";

class Dashboard extends React.Component {
  state = {
    showAnswered: "showUnAnswered"
  };

  // Update the state whenever the answer or unanswered header is clicked
  handleClick = e => {
    this.setState(prevState => ({
      showAnswered: e
    }));
  };

  render() {
    const { users, user, questions } = this.props;
    /* sortQuestions helper function helps to sort the questions
     * based on  whether they have been answered or not*/
    const { unansweredQuestions, answeredQuestions } = sortQuestions(
      questions,
      user
    );

    return (
      <div className={"grid-container"}>
        <div
          style={
            this.state.showAnswered === "showAnswered"
              ? {
                  background: " #ca504f"
                }
              : null
          }
          className={"answered-header"}
          onClick={() => this.handleClick("showAnswered")}
        >
          <h1 className={"dashoard-title"}>Answered Questions</h1>
        </div>
        <div
          style={
            this.state.showAnswered === "showUnAnswered"
              ? {
                  background: " #ca504f"
                }
              : null
          }
          className={"unanswer-header"}
          onClick={() => this.handleClick("showUnAnswered")}
        >
          <h1 className={"dashoard-title"}>Unanswered Questions</h1>
        </div>
        <div className={"questions-cards-container"}>
          <div className={"grid-item"}>
            {this.state.showAnswered === "showAnswered" ? (
              <div>
                <AnsweredQuestions
                  sortedQuestions={answeredQuestions}
                  questions={questions}
                  users={users}
                />
              </div>
            ) : (
              <div>
                <UnAnsweredQuestions
                  sortedQuestions={unansweredQuestions}
                  questions={questions}
                  users={users}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Pick the authorised user and the list of all  users and questions from the store
function mapStateToProps({ users, questions, authUser }) {
  // Get the specific user information of the logged in user
  const user = users[authUser];
  return {
    users,
    user: user,
    questions,
    authUser
  };
}
export default connect(mapStateToProps)(Dashboard);
