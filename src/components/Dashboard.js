import React from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { sortQuestions } from "../utils/helper";

// NEEDs the  user and questions from the connect

class Dashboard extends React.Component {
  state = {
    showAnswered: "showUnAnswered"
  };

  handleClick = e => {
    this.setState(prevState => ({
      showAnswered: e
    }));
  };

  render() {
    const { users, user, questions, authUser } = this.props;
    // For Testing Purpose
    if (!authUser) {
      return <Redirect to={"/login"} />;
    }

    const { unansweredQuestions, answeredQuestions } = sortQuestions(
      questions,
      user
    );

    return (
      <div>
        <div className={"dashbord-container"}>
          <div
            className={"answered-header"}
            onClick={() => this.handleClick("showAnswered")}
          >
            <h1>Answered Questions</h1>
          </div>
          <div
            className={"unanswer-header"}
            onClick={() => this.handleClick("showUnAnswered")}
          >
            <h1>UnAnswered Questions</h1>
          </div>
        </div>

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
    );
  }
}

function mapStateToProps({ users, questions, authUser }) {
  const user = users[authUser];
  return {
    users,
    user: user,
    questions,
    authUser
  };
}
export default connect(mapStateToProps)(Dashboard);
