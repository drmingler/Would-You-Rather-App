import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { Dropdown, Button } from "semantic-ui-react";
import { loginDropDown } from "../utils/helper";

class LoginPage extends React.Component {
  // Store  the presently selected user on the login form
  state = {
    choice: ""
  };

  // On submit dispatch an action to set the authorised user
  handleSubmit = e => {
    e.preventDefault();
    const { choice } = this.state;
    if (choice) {
      this.props.dispatch(setAuthUser(choice));
      /* Get the path of  previous destination the user
       was routing to before being directed to the login page*/
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      // Redirect to the destination after login
      this.props.history.push(from);
    }
  };

  // On select update the state with te presently selected option
  handleChange = (e, data) => {
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
            <h3> Welcome To The Would You Rather App</h3>
          </div>
          <div className={"login-logo"}>
            <img
              src={
                "https://www.pngjoy.com/pngl/826/9766605_react-logo-react-js-logo-svg-transparent-png.png"
              }
              alt={"react-logo"}
            />
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

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LoginPage);
