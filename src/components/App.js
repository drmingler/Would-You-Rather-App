import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { handleSaveQuestionAnswers, handleAddQuestions } from "../actions/shared";
import { setAuthUser } from '../actions/authUser'
class App extends React.Component {
  update = () =>{
      this.props.dispatch(
          handleSaveQuestionAnswers({
              authedUser: "sarahedo",
              qid: "vthrdm985a262al8qx3do",
              answer: "optionOne"
          })
      );
      this.props.dispatch(setAuthUser("sarahedo"))
      this.props.dispatch(handleAddQuestions({
          authedUser : "sarahedo",
          optionOneText:" chicken?",
          optionTwoText : "cow?"
      }))
  }

  componentDidMount() {

    this.props.dispatch(handleInitialData());

  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.update()}> click me</button>
        <p>Hello React</p>
      </div>
    );
  }
}

export default connect()(App);
