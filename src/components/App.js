import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import PollResult from "./PollResult";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import Error from "./Error";
import QuestionChoiceCard from "./QuestionChoiceCard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={QuestionCard} />
          <Route path="/poll/:qid"   component={PollResult} />
          <Route path={"/error"} component={Error}/>
          <Route path={"/test"} component={QuestionChoiceCard}/>

        </div>
      </Router>
    );
  }
}

export default connect()(App);
