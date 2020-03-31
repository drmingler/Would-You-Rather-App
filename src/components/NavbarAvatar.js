import React from "react";

class NavBarAvatar extends React.Component {
  render() {
    const { name, avatarURL } = this.props.authUserDetails;

    return (
      <div>
        <div>
          <span>{`Hello,  ${name} `}</span>
        </div>
          <img src={avatarURL}  alt={`Avatar of ${name}`} />
      </div>
    );
  }
}

export default NavBarAvatar;

// <img src={avatarURL}  alt={`Avatar of ${name}`} className={"avatar"} />
// <span>{`Hello,  ${name} `}</span>