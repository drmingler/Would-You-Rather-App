import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import PollResult from "./PollResult";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Error from "./Error";
import QuestionChoiceCard from "./QuestionChoiceCard";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import ScoreCard from "./ScoreCard";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LoginPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/poll/:qid"   component={PollResult} />
          <Route path={"/error"} component={Error}/>
          <Route path={"/test"} component={QuestionChoiceCard}/>
          <Route path={"/score"} component={ScoreCard}/>

        </div>
      </Router>
    );
  }
}

export default connect()(App);
