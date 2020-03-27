import React from "react";
import { Link } from "react-router-dom";

/// I need Authorname,
// Author Avatar
// Author picture
// question id
// Link to poll or result

class QuestionChoiceCard extends React.Component {
  render() {
    return (
      <div className={"choice-card-container"}>
        <h2>Emma ask:</h2>
        <h3>Avatar here</h3>
        <div>
          <h2>Would you rather?</h2>

          <h2>option 1</h2>
          <div>
            <Link to={"/"}>To poll</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionChoiceCard;
