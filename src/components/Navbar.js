import React from "react";
import { NavLink } from "react-router-dom";
import NavBarAvatar from "./NavbarAvatar";
import { connect } from "react-redux";
class NavBar extends React.Component {
  render() {
   const {user} = this.props
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
              <NavLink to="/" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">
                Leader Board
              </NavLink>
            </li>
          </ul>
          {user && (<NavBarAvatar />)}
        </nav>
      </div>
    );
  }
}
//
function mapStateToProps({users, authedUser}) {
  const loggedInUser = authedUser ? users[authedUser] : null;
 return {
   user: loggedInUser
 };
}
export default connect(mapStateToProps)(NavBar);
