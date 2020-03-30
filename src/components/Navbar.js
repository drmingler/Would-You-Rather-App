import React from "react";
import { NavLink } from "react-router-dom";
import NavBarAvatar from "./NavbarAvatar";
import { connect } from "react-redux";
class NavBar extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <nav className={"nav-container"}>
          <ul className={"nav-links"}>
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
            <li>
              <NavLink to="/logout" activeClassName="active">
                Logout
              </NavLink>
            </li>
          </ul>
          {user && <NavBarAvatar />}
        </nav>
      </div>
    );
  }
}
//
function mapStateToProps({ users, authedUser }) {
  const loggedInUser = authedUser ? users[authedUser] : null;
  return {
    user: loggedInUser
  };
}
export default connect(mapStateToProps)(NavBar);
