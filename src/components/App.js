import React from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
// import { handleSaveQuestionAnswers, handleAddQuestions } from "../actions/shared";
//import NavBar from "./Navbar";
//import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
  // update = () =>{
  //     this.props.dispatch(
  //         handleSaveQuestionAnswers({
  //             authedUser: "sarahedo",
  //             qid: "vthrdm985a262al8qx3do",
  //             answer: "optionOne"
  //         })
  //     );
  //     this.props.dispatch(setAuthUser("sarahedo"))
  //     this.props.dispatch(handleAddQuestions({
  //         authedUser : "sarahedo",
  //         optionOneText:" chicken?",
  //         optionTwoText : "cow?"
  //     }))
  // }
  //  <button onClick={() => this.update()}> click me</button>
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div>

    );
  }
}

export default connect()(App);
