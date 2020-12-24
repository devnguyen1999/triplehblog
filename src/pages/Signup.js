import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../HandleUser";
import { useForm } from "react-hook-form";

function Login() {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { from } = { from: { pathname: "/" } };
  const [redirect, setRedirect] = useState(false);
  const errorMessage = (error) => {
    return <label className="error mt-2">{error}</label>;
  };

  if (redirect) {
    return <Redirect to={from} />;
  }
  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios({
      method: "post",
      url: "https://h3-blog.herokuapp.com/user/login",
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
          values.email
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
  return (
    <div>
      <Header />
      {/* Inne Page Banner Area Start Here */}
      <section className="inner-page-banner bg-common">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Đăng ký</h1>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>Đăng ký</li>
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
                  <h2 className="item-heading">FORM ĐĂNG KÝ</h2>
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
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                      />
                      {errors.email &&
                        errors.email.type === "required" &&
                        errorMessage("Email không được để trống.")}
                      {errors.email &&
                        errors.email.type === "pattern" &&
                        errorMessage("Email không hợp lệ.")}
                    </div>
                    <div className="col-md-6">
                      <label className="mb-3">Mật khẩu</label>
                      <input
                        className="main-input-box"
                        id="password"
                        name="password"
                        ref={register({
                          required: true,
                          minLength: 6,
                        })}
                        type="password"
                      />
                      {errors.password &&
                        errors.password.type === "required" &&
                        errorMessage("Mật khẩu không được để trống.")}
                      {errors.password &&
                        errors.password.type === "minLength" &&
                        errorMessage("Mật khẩu phải có ít nhất 6 kí tự.")}
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="checkbox checkbox-primary">
                        <input id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">Đồng ý với <strong><Link>Điều khoản sử dụng</Link></strong> của chúng tôi.</label>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button
                      className="btn-fill btn-primary"
                      type="submit"
                    >
                      Đăng ký
                      <i className="flaticon-next" />
                    </button>
                  </div>
                </form>
                <label className="d-block register-now">
                  Bạn đã có tài khoản? <Link to="/dang-nhap">Đăng nhập ngay</Link>
                </label>
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

export default Login;
