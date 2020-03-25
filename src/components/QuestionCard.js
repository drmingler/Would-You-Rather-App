import React from "react";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import {handleAddQuestions} from "../actions/shared"
class QuestionCard extends React.Component {
  handleSubmit = e => {
    const {user, dispatch} = this.props;
    e.preventDefault();
    const result = serializeForm(e.target, { hash: true });
    // Use the spread operator to pass the question from the result object
    dispatch(handleAddQuestions({ ...result, authedUser: user }));
    // redirect to homepage
  };
  render() {
    return (
      <div>
        <div className={"question-form"}>
          <div className={"question-form-container"}>
            <form onSubmit={this.handleSubmit}>
              <div className={"test"}>
                <div>
                  <h1>CREATE NEW QUESTION</h1>
                </div>
                <h3>Complete the question:</h3>
                <h2>Would You Rather</h2>

                <div>
                  <input
                    type={"text"}
                    name={"optionOneText"}
                    placeholder={"Enter Option One Text Here"}
                    required
                  />
                </div>
                <h3>OR</h3>
                <div>
                  <input
                    type={"text"}
                    name={"optionTwoText"}
                    placeholder={"Enter Option Two Text Here"}
                    required
                  />
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// To return the authorized user setting the question
function mapStateToProps({ authUser }) {
  return { user: authUser };
}
export default connect(mapStateToProps)(QuestionCard);
