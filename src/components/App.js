import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import PollResult from "./PollResult";


class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <PollResult/>
      </div>
    );
  }
}

export default connect()(App);
