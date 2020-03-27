import React from "react";
import AnsweredQuestion from "./AnsweredQuestion";

// NEEDs the  user and questions from the connect

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Answered Questions</h1>
                    <AnsweredQuestion/>
                </div>
                <div>
                    <h1>UnAnswered Questions</h1>
                    <AnsweredQuestion/>
                </div>
            </div>
        );
    }
}

export default Dashboard;