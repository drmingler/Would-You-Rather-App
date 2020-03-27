import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import PollResult from "./PollResult";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import Error from "./Error";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={QuestionCard} />
          <Route path="/poll/:qid"  exact component={PollResult} />
          <Route path={"/error"} component={Error}/>

        </div>
      </Router>
    );
  }
}

export default connect()(App);
