import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loi-404">
          <NotFound />
        </Route>
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/ve-chung-toi">
          <About />
        </Route>
        <Route path="/dang-nhap">
          <Login />
        </Route>
        <Route path="/dang-ky">
          <Signup />
        </Route>
        <Route path="/quen-mat-khau">
          <Login />
        </Route>
        <Route path="/:slug" children={<PostDetail />} />
      </Switch>
  );
}

export default Routes;
