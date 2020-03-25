import React from "react";
import { connect } from "react-redux";
import {setAuthUser} from "../actions/authUser"
class LoginPage extends React.Component {
  state = {
    choice: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const {choice} = this.state;
    if(choice){
      this.props.dispatch(setAuthUser(choice))
      // Redirect to homepage
    }

  };

  handleChange = e => {
    const choice = e.target.value;
    this.setState({ choice });
  };
  render() {
    const { users } = this.props;
    return (
      <div className={"form-container"}>
        <div>
          <h1>Login Page</h1>
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
              <option >Select A User</option>
              {Object.keys(users).map(user => (
                <option
                  key={users[user].id}
                  value={users[user].id}
                >{`${users[user].name}`}</option>
              ))}
            </select>
            <div>
              <button type={"submit"}> Submit </button>
            </div>
          </form>
        </div>
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
