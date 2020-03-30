import React from "react";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import {handleAddQuestions} from "../actions/shared"
import {Redirect} from "react-router-dom";


class CreateQuestion extends React.Component {
  handleSubmit = e => {
    const {authUser, dispatch} = this.props;
    e.preventDefault();
    const result = serializeForm(e.target, { hash: true });
    // Use the spread operator to pass the question from the result object
    dispatch(handleAddQuestions({ ...result, authedUser: authUser }));
    // redirect to homepage
    this.props.history.push('/')

  };
  render() {
    const {authUser} = this.props;
    if (!authUser) {
      return <Redirect to={"/login"} />;
    }
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
  return { authUser };
}
export default connect(mapStateToProps)(CreateQuestion);
