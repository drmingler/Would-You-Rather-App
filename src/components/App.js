import React from "react";
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <p>Hello React</p>
      </div>
    );
  }
}

export default connect()(App);
