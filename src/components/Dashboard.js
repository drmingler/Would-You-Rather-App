import React from "react";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

// NEEDs the  user and questions from the connect

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Answered Questions</h1>
                    <AnsweredQuestions/>
                </div>
                <div>
                    <h1>UnAnswered Questions</h1>
                    <UnAnsweredQuestions/>
                </div>
            </div>
        );
    }
}

export default Dashboard;