import React from "react";
import { formatQuestions } from "../utils/helper";
import { connect } from "react-redux";
import { handleSaveQuestionAnswers } from "../actions/shared";
import serializeForm from "form-serialize";
import { Redirect } from "react-router-dom";
import { Form, Radio, Button } from "semantic-ui-react";

// I need a the asking user ID as a Prop and question ID  from  the route of the Answered And unAnswered component
class QuestionCard extends React.Component {
  state = {
    value: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      const { authedUser, qid } = this.props;
      const answer = serializeForm(e.target, { hash: true });
      this.props.dispatch(
        handleSaveQuestionAnswers({ authedUser, qid, ...answer })
      );
      // Redirect to poll with question id result page
      this.props.history.push(`/poll/${qid}`);
    }
  };

  handleChange = (e, { value }) => {
    e.preventDefault();
    this.setState(() => ({ value: value }));
  };

  render() {
    const { question, authedUser, voted } = this.props;
    // TESTING PURPOSE
    if (!authedUser) {
      return <Redirect to={"/login"} />;
    }
    if (voted === true) {
      return <Redirect to={"/"} />;
    }
    const { avatar, author, optionOne, optionTwo } = question;
    return (
      <div className={"questioncard-container"}>
        <div className={"questioncard-title"}>
          <h1>{`${author} asks:`}</h1>
        </div>
        <div>
          <div className={"questioncard-flex-container"}>
            <div className={"questioncard-avatar"}>
              <img src={avatar} alt={author} />
            </div>
            <div className={"questioncard-flex-item1"}>
              <h1>Would You Rather</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Radio
                    label={optionOne}
                    name={"answer"}
                    value="optionOne"
                    checked={this.state.value === "optionOne"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label={optionTwo}
                    name={"answer"}
                    value="optionTwo"
                    checked={this.state.value === "optionTwo"}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Button className={"vote-button"} type={"submit"}>
                  Vote
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, props) {
  const { question_id } = props.match.params;
  // Check if user has voted already
  const voted = authUser
    ? Object.keys(users[authUser].answers).includes(question_id)
    : null;

  return {
    qid: question_id,
    authedUser: authUser,
    question:
      Object.keys(questions).length !== 0
        ? formatQuestions(questions[question_id], users)
        : null,
    voted
  };
}

export default connect(mapStateToProps)(QuestionCard);
