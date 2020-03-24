import React from "react";

class NavBarAvatar extends React.Component {
  handleLogOut = () => {
    // dispatch logout action
    // redirect to homepage
  };
  render() {
    // const  {name, avatar} = this.props;
    const name = "Sarah Edo";
    const avatar = "https://tylermcginnis.com/would-you-rather/sarah.jpg";

    return (
      <div>
        <span className={"avatar-name"}>
            {`Hello,  ${name} `}
        </span>
        <img src={avatar} alt={`Avatar of ${name}  `} className={"avatar"} />
        <button onClick={() => this.handleLogOut()}>Logout</button>
      </div>
    );
  }
}

export default NavBarAvatar;



