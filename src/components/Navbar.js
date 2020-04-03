import React, { Fragment } from "react";
import { NavLink , Redirect} from "react-router-dom";
import NavBarAvatar from "./NavbarAvatar";
import { connect } from "react-redux";
import { logOut } from "../actions/authUser";
class NavBar extends React.Component {
  // dispatch a logout action whenever logout is clicked
  handleLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logOut());
  };
  render() {
     /* Get the logged in user from app component
      and the user information from the store*/
    const { user, authUserInfo } = this.props;
    return (
      <nav>
        <ul className={"navbar-container"}>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {user ? (
            <Fragment>
              <li>
                <NavBarAvatar authUserDetails={authUserInfo} />
              </li>
              <li>
                <NavLink
                  onClick={this.handleLogout}
                  to="/leaderboard"
                  activeClassName="active"
                >
                  Logout
                </NavLink>
              </li>
            </Fragment>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users }, { user }) {
  const authUserInfo = user ? users[user] : null;
  return { authUserInfo };
}
export default connect(mapStateToProps)(NavBar);
