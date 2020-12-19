import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <Header />
        {/* Inne Page Banner Area Start Here */}
        <section
          className="inner-page-banner bg-common"
          data-bg-image="img/figure/inner-page-banner1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>User Login Page</h1>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inne Page Banner Area End Here */}
        {/* Login Area Start Here */}
        <section className="login-page-wrap padding-top-80 padding-bottom-50">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-8">
                <div className="login-box-layout1">
                  <div className="section-heading heading-dark">
                    <h2 className="item-heading">LOGIN FORM</h2>
                  </div>
                  <form className="login-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="mb-3">
                          Username or Email Address
                        </label>
                        <input
                          className="main-input-box"
                          type="text"
                          placeholder
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="mb-3">Password</label>
                        <input
                          className="main-input-box"
                          type="password"
                          placeholder
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="checkbox checkbox-primary">
                          <input id="checkbox1" type="checkbox" />
                          <label htmlFor="checkbox1">Remember Me</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="lost-password">
                          <a href="#">Lost your password?</a>
                        </label>
                      </div>
                    </div>
                    <div className="btn-area">
                      <button
                        className="btn-fill btn-primary"
                        type="submit"
                        value="Login"
                      >
                        Login
                        <i className="flaticon-next" />
                      </button>
                      <button
                        className="btn-fill btn-dark"
                        type="submit"
                        value="Login"
                      >
                        Creat an Accont
                        <i className="flaticon-next" />
                      </button>
                    </div>
                  </form>
                  <label>Or Connect With Social Networks</label>
                  <div className="login-box-social">
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                <div className="widget">
                  <div className="section-heading heading-dark">
                    <h3 className="item-heading">ABOUT ME</h3>
                  </div>
                  <div className="widget-about">
                    <figure className="author-figure">
                      <img src="img/figure/about.jpg" alt="about" />
                    </figure>
                    <figure className="author-signature">
                      <img src="img/figure/signature.png" alt="about" />
                    </figure>
                    <p>
                      Fusce mauris auctor ollicituder teary iner hendrerit
                      risusey aeenean rauctor pibus doloer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Login Area End Here */}
        <Footer />
      </div>
  );
}

export default Login;