import React from "react";
import {connect} from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoutes extends React.Component {
  render() {
    const { component: Component, authUser, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          authUser ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}
export default connect(mapStateToProps)(ProtectedRoutes);
