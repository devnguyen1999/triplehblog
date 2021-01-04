import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link, useLocation } from "react-router-dom";
import { getUser, getToken, removeUserSession } from "../helpers/HandleUser";

function Header() {
  let location = useLocation();
  const [loggedIn, setloggedIn] = useState(getToken() ? true : false);
  const logOut = (event) => {
    event.preventDefault();
    setloggedIn(false);
    removeUserSession();
  };
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios({
      method: "get",
      url: ApiBaseURL("category/load"),
    })
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getCategories();
    const script = document.createElement("script");

    script.src = "../assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const displayCheck = () => {
    if (loggedIn) {
      var user = getUser();
      return (
        <li>
          <a href="#!" className="text-white p-0">
          <i className="flaticon-profile mr-3" />
            {user.name}
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
      );
    } else {
      return (
        <li>
          <Link
            to={{
              pathname: "/dang-nhap",
              params: { from: location },
            }}
            className="text-white p-0"
          >
            <i className="flaticon-profile mr-3" />
            Đăng nhập
          </Link>
        </li>
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
              <div className="col-lg-8 col-md-4 col-sm-5 col-5 possition-static">
                <div className="site-logo-mobile">
                  <Link to="/" className="sticky-logo-light">
                    <img src="../assets/img/logo-light.png" alt="Site Logo" />
                  </Link>
                  <Link to="/" className="sticky-logo-dark">
                    <img src="../assets/img/logo-dark.png" alt="Site Logo" />
                  </Link>
                </div>
                <nav className="site-nav">
                  <ul id="site-menu" className="site-menu">
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                      <a href="#!">Thể loại</a>
                      <ul className="dropdown-menu-col-1">
                        {categories.map((value, key) => {
                          return (
                            <li key={key}>
                              <Link to={"/the-loai/" + value.nameUrl}>
                                {value.name}
                              </Link>
                            </li>
                          );
                        })}
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
              {/* <div className="col-lg-4 col-md-8 col-sm-7 col-7 d-flex align-items-center justify-content-end">
                <nav className="site-nav">
                  <ul id="site-menu" className="site-menu">
                    {displayCheck()}
                  </ul>
                </nav>
                <div className="mob-menu-open toggle-menu">
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </div>
              </div> */}
              <div className="col-lg-4 col-md-8 col-sm-7 col-7 d-flex align-items-center justify-content-end">
                <div className="nav-action-elements-layout1">
                  <ul>
                    {/* <li>
                      <button
                        type="button"
                        className="login-btn"
                      >
                        
                        Login
                      </button>
                    </li> */}
                    {displayCheck()}
                  </ul>
                </div>
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
                  <Link to="/" className="main-logo">
                    <img src="../assets/img/logo-dark.png" alt="Site Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="nav-action-elements-layout3">
                  <ul>
                    <li>
                      <div className="header-search-box">
                        <Link to="/tim-kiem" className="search-button">
                          <i className="flaticon-search" />
                        </Link>
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
