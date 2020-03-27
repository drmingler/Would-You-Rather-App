import React from "react";
import { formatQuestions } from "../utils/helper";
import { connect } from "react-redux";
import { handleSaveQuestionAnswers } from "../actions/shared";
import serializeForm from "form-serialize";

// I need a the asking user ID as a Prop and question ID  from  the route of the Answered And unAnswered component
class QuestionCard extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { authedUser, qid } = this.props;
    const answer = serializeForm(e.target, { hash: true });
    this.props.dispatch(
      handleSaveQuestionAnswers({ authedUser, qid, ...answer })
    );
    // Redirect to poll with question id result page
    this.props.history.push(`/poll/${qid}`);

    // console.log(Object.keys(users[authedUser].answers).includes(qid));
  };

  render() {
    const { question, users } = this.props;
    // TESTING PURPOSE
    if (question === null) {
      return null;
    }
    const { author, optionOne, optionTwo } = question;
    const authorName = users[author].name;

    return (
      <div>
        <h1>{`${authorName} asks`}</h1>
        <div>
          <h1>Would You Rather</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <input
                  type={"radio"}
                  value={"optionOne"}
                  name={"answer"}
                  defaultChecked={true}
                />
                {optionOne}
              </label>
            </div>
            <div>
              <label>
                <input type={"radio"} name={"answer"} value={"optionTwo"} />
                {optionTwo}
              </label>
            </div>
            <button type={"submit"}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }) {
  // I will add the questionId later questions[questionId]
  const question = questions["vthrdm985a262al8qx3do"];
  return {
    qid: "vthrdm985a262al8qx3do",
    authedUser: authUser,
    users,
    question: question ? formatQuestions(question) : null
  };
}

export default connect(mapStateToProps)(QuestionCard);
