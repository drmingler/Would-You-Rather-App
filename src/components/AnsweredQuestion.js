import React from "react";
import QuestionChoiceCard from "./QuestionChoiceCard";

// NEEDs the ids of answered questions

class AnsweredQuestion extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <QuestionChoiceCard/>
                    </li>
                </ul>
            </div>
        );
    }
}