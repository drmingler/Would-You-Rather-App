import React from "react";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import { handleAddQuestions } from "../actions/shared";
import { Button } from "semantic-ui-react";

class CreateQuestion extends React.Component {
  // Dispatch an action to save the newly created question
  handleSubmit = e => {
    const { authUser, dispatch } = this.props;
    e.preventDefault();
    const result = serializeForm(e.target, { hash: true });
    // Use the spread operator to pass the question from the result object
    dispatch(handleAddQuestions({ ...result, authedUser: authUser }));
    // redirect to homepage
    this.props.history.push("/");
  };
  render() {
    return (
      <div className={"question-form-container"}>
        <form onSubmit={this.handleSubmit}>
          <div className={"test"}>
            <div className={"new-question-header"}>
              <h1>CREATE NEW QUESTION</h1>
            </div>
            <h3>Complete the question:</h3>
            <h2 className={"question"}>Would You Rather?</h2>
            <div>
              <input
                type={"text"}
                name={"optionOneText"}
                placeholder={"Enter Option One Text Here"}
                required
              />
            </div>
            <h4>OR</h4>
            <div>
              <input
                type={"text"}
                name={"optionTwoText"}
                placeholder={"Enter Option Two Text Here"}
                required
              />
            </div>
            <Button className={"question-form-button"}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}
  // Returns the authorized user setting the question
function mapStateToProps({ authUser }) {
  return { authUser };
}
export default connect(mapStateToProps)(CreateQuestion);
