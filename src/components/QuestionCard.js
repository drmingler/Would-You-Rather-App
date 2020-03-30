import React from "react";
import { formatQuestions } from "../utils/helper";
import { connect } from "react-redux";
import { handleSaveQuestionAnswers } from "../actions/shared";
import serializeForm from "form-serialize";
import {Redirect} from "react-router-dom";

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
  };

  render() {
    const { question,authedUser } = this.props;
    // TESTING PURPOSE
    if (!authedUser) {
      return <Redirect to={"/login"} />;
    }
    const { author, optionOne, optionTwo } = question;

    return (
      <div>
        <h1>{`${author} asks`}</h1>
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

function mapStateToProps({ questions, users, authUser }, props) {
  const { question_id } = props.match.params;
  console.log(question_id);
  // I will add the questionId later questions[questionId]
  const question = question_id ? questions[question_id] : null;
  return {
    qid: question_id,
    authedUser: authUser,
    question: question ? formatQuestions(question, users) : null
  };
}

export default connect(mapStateToProps)(QuestionCard);
