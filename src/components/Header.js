import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { getUser, getToken, removeUserSession } from "../HandleUser";

function Header() {
  const [loggedIn, setloggedIn] = useState(getToken() ? true : false);
  const { from } = { from: { pathname: "/" } };
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={from} />;
  }
  const logOut = (event) => {
    event.preventDefault();
    setloggedIn(false);
    axios({
      method: "post",
      url: "https://h3-blog.herokuapp.com/user/logout",
      data: {
        token: getToken(),
      },
    })
      .then((response) => {
        console.log(response.data);
        removeUserSession();
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const displayCheck = () => {
    if (loggedIn) {
      var user = getUser();
      return (
        <nav className="site-nav">
          <ul id="site-menu" className="site-menu">
            <li>
              <a href="#!">
                <i className="flaticon-profile mr-3"></i>Đăng Thanh
              </a>
              <ul className="dropdown-menu-col-1">
                <li>
                  <Link to="/trang-ca-nhan">Trang cá nhân</Link>
                </li>
                <li>
                  <a
                    type="button"
                    href="#!"
                    onClick={(event) => {
                      logOut(event);
                    }}
                  >
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div className="nav-action-elements-layout1">
          <ul>
            <li>
              <Link className="login-btn" to="/dang-nhap">
                <i className="flaticon-profile"></i>Đăng nhập
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };
  return (
    <div>
      {/* Header Area Start Here */}
      <header className="header-one">
        <div id="header-main-menu" className="header-main-menu header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-3 col-sm-4 col-4 possition-static">
                <div className="site-logo-mobile">
                  <a href="index.html" className="sticky-logo-light">
                    <img src="../assets/img/logo-light.png" alt="Site Logo" />
                  </a>
                  <a href="index.html" className="sticky-logo-dark">
                    <img src="../assets/img/logo-dark.png" alt="Site Logo" />
                  </a>
                </div>
                <nav className="site-nav">
                  <ul id="site-menu" className="site-menu">
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                      <a href="category.html">Category</a>
                    </li>
                    <li>
                      <a href="#!">Recipes</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="recipe-with-sidebar.html">
                            Recipes With Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="recipe-without-sidebar.html">
                            Recipes Without Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="single-recipe1.html">Single Recipe 1</a>
                        </li>
                        <li>
                          <a href="single-recipe2.html">Single Recipe 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="possition-static hide-on-mobile-menu">
                      <a href="#!">Pages</a>
                      <div className="template-mega-menu">
                        <div className="container">
                          <div className="row">
                            <div className="col-4">
                              <div className="menu-ctg-title">Home</div>
                              <ul className="sub-menu">
                                <li>
                                  <a href="index.html">
                                    <i className="fas fa-home" />
                                    Home 1
                                  </a>
                                </li>
                                <li>
                                  <a href="index2.html">
                                    <i className="fas fa-home" />
                                    Home 2
                                  </a>
                                </li>
                              </ul>
                              <div className="menu-ctg-title">Recipes</div>
                              <ul className="sub-menu">
                                <li>
                                  <a href="recipe-with-sidebar.html">
                                    <i className="fas fa-utensils" />
                                    Recipes With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="recipe-without-sidebar.html">
                                    <i className="fas fa-utensils" />
                                    Recipes Without Sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="sub-menu">
                                <li>
                                  <a href="single-recipe1.html">
                                    <i className="fas fa-utensils" />
                                    Single Recipe 1
                                  </a>
                                </li>
                                <li>
                                  <a href="single-recipe2.html">
                                    <i className="fas fa-utensils" />
                                    Single Recipe 2
                                  </a>
                                </li>
                              </ul>
                              <div className="menu-ctg-title">Other Pages</div>
                              <ul className="sub-menu">
                                <li>
                                  <a href="about.html">
                                    <i className="fab fa-cloudversify" />
                                    About
                                  </a>
                                </li>
                                <li>
                                  <a href="author.html">
                                    <i className="fas fa-user" />
                                    Author
                                  </a>
                                </li>
                                <li>
                                  <a href="single-author.html">
                                    <i className="fas fa-user" />
                                    Author Details
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="sub-menu">
                                <li>
                                  <a href="submit-recipe.html">
                                    <i className="far fa-share-square" />
                                    Submit Recipe
                                  </a>
                                </li>
                                <li>
                                  <a href="login.html">
                                    <i className="fas fa-lock" />
                                    Login
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">
                                    <i className="fas fa-exclamation-triangle" />
                                    404 Error
                                  </a>
                                </li>
                              </ul>
                              <div className="menu-ctg-title">Shop</div>
                              <ul className="sub-menu">
                                <li>
                                  <a href="shop.html">
                                    <i className="fas fa-shopping-cart" />
                                    Shop
                                  </a>
                                </li>
                                <li>
                                  <a href="single-shop.html">
                                    <i className="fas fa-shopping-cart" />
                                    Shop Details
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="hide-on-desktop-menu">
                      <a href="#!">Pages</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="author.html">Author</a>
                        </li>
                        <li>
                          <a href="single-author.html">Author Details</a>
                        </li>
                        <li>
                          <a href="submit-recipe.html">Submit Recipe</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="login.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Blog</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Shop</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="single-shop.html">Shop Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/lien-he">Liên hệ</Link>
                    </li>
                    <li>
                      <Link to="/ve-chung-toi">Về chúng tôi</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-md-9 col-sm-8 col-8 d-flex align-items-center justify-content-end">
                {displayCheck()}
                <div className="mob-menu-open toggle-menu">
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-none d-lg-block">
                <div className="nav-action-elements-layout2">
                  <ul className="nav-social">
                    <li>
                      <a href="#!" title="facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="pinterest">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="skype">
                        <i className="fab fa-skype" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="rss">
                        <i className="fas fa-rss" />
                      </a>
                    </li>
                    <li>
                      <a href="#!" title="google-plus">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="site-logo-desktop">
                  <a href="index.html" className="main-logo">
                    <img src="../assets/img/logo-dark.png" alt="Site Logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="nav-action-elements-layout3">
                  <ul>
                    <li>
                      <div className="header-search-box">
                        <a
                          href="#search"
                          title="Search"
                          className="search-button"
                        >
                          <i className="flaticon-search" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End Here */}
    </div>
  );
}

export default Header;
