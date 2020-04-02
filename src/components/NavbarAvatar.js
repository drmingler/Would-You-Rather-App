import React from "react";

class NavBarAvatar extends React.Component {
  render() {
      // Get the name and avatar of the currently authorised user from the  Navbar component
    const { name, avatarURL } = this.props.authUserDetails;
    return (
      <div className={"avatar-container"}>
        <div>
          <p className={"name"}>{`Hello,  ${name} `}</p>
          <img src={avatarURL} alt={`Avatar of ${name}`} className={"avatar"} />
        </div>
      </div>
    );
  }
}

export default NavBarAvatar;

