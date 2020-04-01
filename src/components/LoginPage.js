import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { Dropdown, Button } from "semantic-ui-react";
import { loginDropDown } from "../utils/helper";

class LoginPage extends React.Component {
  state = {
    choice: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { choice } = this.state;
    if (choice) {
      this.props.dispatch(setAuthUser(choice));
      // Redirect to homepage
      this.props.history.push("/");
    }
  };

  handleChange = (e, data )=> {
    const choice = data.value;
    this.setState({ choice });
  };
  render() {
    const { users } = this.props;
    const userDetails = loginDropDown(users);
    return (
      <div className={"form-container"}>
        <div>
          <div className={"form-title"}>
            <p> Welcome To The Would You Rather App</p>
          </div>
          <h1 className={"login-form-title"}>Login Page</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Dropdown
            placeholder={"Select Friend"}
            fluid
            selection
            options={userDetails}
            onChange={this.handleChange}
            className={"login-dropdown"}
          />
          <Button className={"form-button"} type="submit">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }, props) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LoginPage);

// <form onSubmit={this.handleSubmit}>
//   <select onChange={this.handleChange}>
//     <option>Select A User</option>
//     {Object.keys(users).map(user => (
//         <option
//             key={users[user].id}
//             value={users[user].id}
//         >{`${users[user].name}`}</option>
//     ))}
//   </select>
//   <div>
//
//     <button type={"submit"}> Submit </button>
//   </div>
// </form>
