import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { handleSaveQuestionAnswers } from "../actions/shared";
class App extends React.Component {
  update = () =>
    this.props.dispatch(
      handleSaveQuestionAnswers({
        authedUser: "sarahedo",
        qid: "vthrdm985a262al8qx3do",
        answer: "optionOne"
      })
    );
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
