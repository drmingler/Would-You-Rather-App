import React from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import { connect } from "react-redux";

// NEEDs the  user and questions from the connect

class Dashboard extends React.Component {
  state = {
    showAnswered: "showAnswered"
  };

  handleClick = e => {
    this.setState(prevState => ({
      showAnswered: e
    }));
  };

  render() {
    const { users, user, questions } = this.props;
    // For Testing Purpose
    if (!user) {
      return null;
    }
    const answeredQid = Object.keys(user.answers);
    const unansweredQid = Object.keys(questions).filter(
      key => !answeredQid.includes(key)
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
              questionIds={answeredQid}
              questions={questions}
              users={users}
            />
          </div>
        ) : (
          <div>
            <UnAnsweredQuestions
              questionIds={unansweredQid}
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
    questions
  };
}
export default connect(mapStateToProps)(Dashboard);
