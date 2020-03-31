import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import PollResult from "./PollResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import LeaderBoard from "./LeaderBoard";
import CreateQuestion from "./CreateQuestion";
import Navbar from "./Navbar";
import QuestionCard from "./QuestionCard";

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  //
  render() {
    const {authUser} = this.props;
    return (
      <Router>
        <Navbar user={authUser}>
        <div className="App">
          <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/poll/:question_id"   component={PollResult} />
          <Route path={"/questions/:question_id"} component={QuestionCard}/>
          <Route path={"/leaderboard"} exact component={LeaderBoard}/>
          <Route path={"/add"} exact component={CreateQuestion}/>
          <Route path={"*"} component={Error} />
          </Switch>
        </div>
        </Navbar>
      </Router>
    );
  }
}

function mapStateToProps({authUser}) {
    return {authUser}
}
export default connect(mapStateToProps)(App);
