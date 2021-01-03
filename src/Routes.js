import React from "react";
import { Switch, Route } from "react-router-dom";
import { PublicRoute } from './helpers/PublicRoute';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Category from "./pages/Category";
import Tag from "./pages/Tag";
import Search from "./pages/Search";
function Routes() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/loi-404">
          <NotFound />
        </Route>
        <Route path="/the-loai/:slug">
          <Category />
        </Route>
        <Route path="/tag/:slug">
          <Tag />
        </Route>
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/ve-chung-toi">
          <About />
        </Route>
        <Route path="/trang-ca-nhan">
          <About />
        </Route>
        <PublicRoute path="/dang-nhap" component={Login}/>
        <PublicRoute path="/dang-ky" component={Signup}/>
        <PublicRoute path="/quen-mat-khau" component={Login}/>
        <Route path="/tim-kiem">
          <Search />
        </Route>
        <Route path="/:slug" children={<PostDetail />} />
      </Switch>
  );
}

export default Routes;
