import React from "react";
import {connect} from "react-redux";
class LoginPage extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div className={"form-container"}>
        <div>
          <form>
            <select>
              {Object.keys(users).map((user)=>(
                  <option key={users[user].id}>{`${users[user].name}`}</option>
              ))
              }
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

function mapStateToProps({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LoginPage);
