import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loi-404">
          <NotFound />
        </Route>
        <Route path="/dang-nhap">
          <Login />
        </Route>
        <Route path="/:slug" children={<PostDetail />} />
      </Switch>
  );
}

export default Routes;
