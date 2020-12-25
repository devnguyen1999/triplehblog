import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "./HandleUser";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = getUser();
      if (currentUser) {
        return (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);
