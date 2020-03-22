import React from "react";
import { getInitialData } from "../utils/api";

class App extends React.Component {
  componentDidMount() {
      getInitialData().then(({users,questions})=>{
          console.log('users : ', users);
          console.log('questions :', questions)})
  }

  render() {
    return (
      <div className="App">
        <p>Hello React</p>
      </div>
    );
  }
}

export default App;
