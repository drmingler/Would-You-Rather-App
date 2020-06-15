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
import ProtectedRoutes from "./ProtectedRoutes";

class App extends React.Component {
  // Get the initial data from the store
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <Navbar user={authUser} />
        <div className="Container">
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <ProtectedRoutes path="/" exact component={Dashboard} />
            <ProtectedRoutes path="/poll/:question_id" component={PollResult} />
            <ProtectedRoutes path={"/questions/:question_id"} component={QuestionCard} />
            <ProtectedRoutes path={"/leaderboard"} exact component={LeaderBoard} />
            <ProtectedRoutes path={"/add"} exact component={CreateQuestion} />
            <Route path={"*"} component={Error} />
            <Route exact  path={"/error"} component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// Get the authorized user i.e logged in user from the store
function mapStateToProps({ authUser }) {
  return { authUser };
}
export default connect(mapStateToProps)(App);
