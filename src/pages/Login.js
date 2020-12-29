import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../HandleUser";
import { useForm } from "react-hook-form";
import { ApiBaseURL } from "../ApiBaseURL";

function Login(props) {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const errorMessage = (error) => {
    return <span className="error mt-2 d-block">{error}</span>;
  };

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios({
      method: "post",
      url: ApiBaseURL("user/login"),
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setUserSession(
          response.data.token,
          response.data.refreshToken,
          response.data.user
        );
        setRedirect(true);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 403) {
          setError(error.response.data.message);
        } else {
          setError("Có lỗi xảy ra. Vui lòng thử lại.");
        }
      });
  };
  useEffect(() => {document.title = "Đăng nhập";}, []);
  if (redirect) {
    return <Redirect to={props.location.params.from} />;
  }
  return (
    <div>
      <Header />
      {/* Inne Page Banner Area Start Here */}
      <section className="inner-page-banner bg-common">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Đăng nhập</h1>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>Đăng nhập</li>
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
                  <h2 className="item-heading">FORM ĐĂNG NHẬP</h2>
                </div>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="mb-3">Email của bạn</label>
                      <input
                        className="main-input-box"
                        type="text"
                        id="email"
                        name="email"
                        ref={register({
                          required: "Email không được để trống.",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email không hợp lệ",
                          },
                        })}
                      />
                      {errors.email && errorMessage(errors.email.message)}
                    </div>
                    <div className="col-md-6">
                      <label className="mb-3">Mật khẩu</label>
                      <input
                        className="main-input-box"
                        id="password"
                        name="password"
                        ref={register({
                          required: "Mật khẩu không được để trống.",
                          minLength: {
                            value: 6,
                            message: "Mật khẩu phải có ít nhất 6 kí tự.",
                          },
                        })}
                        type="password"
                      />
                      {errors.password && errorMessage(errors.password.message)}
                    </div>
                  </div>
                  <div className="row mt-5">
                    {/* <div className="col-md-6">
                      <div className="checkbox checkbox-primary">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">Nhớ tài khoản</label>
                      </div>
                    </div> */}
                    <div className="col-md-6">
                      <label className="lost-password">
                        <Link to="/quen-mat-khau">Quên mật khẩu</Link>
                      </label>
                    </div>
                  </div>
                  <div className="btn-area">
                    <input
                      className="btn-fill btn-primary"
                      type="submit"
                      value={loading ? "Loading..." : "Đăng nhập"}
                      disabled={loading}
                    />
                    {error && (
                      <>
                        <label className="error mt-2 d-block">{error}</label>
                      </>
                    )}
                  </div>
                </form>
                <label className="d-block register-now">
                  Bạn chưa có tài khoản? <Link to="/dang-ky">Đăng ký ngay</Link>
                </label>
                {/* <label className="d-block">Hoặc kết nối với mạng xã hội</label>
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
                  </div> */}
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">VỀ CHÚNG TÔI</h3>
                </div>
                <div className="widget-about">
                  <figure className="author-figure">
                    <img src="../assets/img/figure/about.jpg" alt="about" />
                  </figure>
                  <figure className="author-signature">
                    <img src="../assets/img/figure/signature.png" alt="about" />
                  </figure>
                  <p>
                    Fusce mauris auctor ollicituder teary iner hendrerit risusey
                    aeenean rauctor pibus doloer.
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

Login.propTypes = {};

export default Login;
