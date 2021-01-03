import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ApiBaseURL } from "../ApiBaseURL";
import AboutUs from "../components/AboutUs";

function Signup() {
  const { handleSubmit, register, errors, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const errorMessage = (error) => {
    return <span className="error mt-2 d-block">{error}</span>;
  };

  const password = useRef({});
  password.current = watch("password", "");

  const [redirect, setRedirect] = useState(false);
  const { from } = { from: { pathname: "/dang-nhap" } };

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios({
      method: "post",
      url: ApiBaseURL("user/register"),
      data: {
        email: values.email,
        name: values.name,
        password: values.password,
      },
    })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
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
  useEffect(() => {document.title = "Đăng ký";}, []);
  if (redirect) {
    return <Redirect to={from} />;
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
      {/* Signup Area Start Here */}
      <section className="Signup-page-wrap padding-top-80 padding-bottom-50">
        <div className="container">
          <div className="row gutters-60">
            <div className="col-lg-8">
              <div className="login-box-layout1">
                <div className="section-heading heading-dark">
                  <h2 className="item-heading">FORM ĐĂNG KÝ</h2>
                </div>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="mb-3">Tên của bạn</label>
                      <input
                        className="main-input-box"
                        type="text"
                        id="name"
                        name="name"
                        ref={register({
                          required: "Tên không được để trống.",
                          pattern: {
                            value: /^[A-Za-z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/i,
                            message: "Tên không hợp lệ",
                          },
                        })}
                      />
                      {errors.name && errorMessage(errors.name.message)}
                    </div>
                    <div className="col-md-12 mt-4">
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
                    <div className="col-md-6 mt-4">
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
                    <div className="col-md-6 mt-4">
                      <label className="mb-3">Nhập lại mật khẩu</label>
                      <input
                        className="main-input-box"
                        id="repassword"
                        name="repassword"
                        ref={register({
                          required: "Vui lòng nhập lại mật khẩu.",
                          validate: (value) =>
                            value === password.current ||
                            "Nhập lại mật khẩu không trùng khớp.",
                        })}
                        type="password"
                      />
                      {errors.repassword &&
                        errorMessage(errors.repassword.message)}
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <div className="checkbox checkbox-primary">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          ref={register({
                            required: "Bạn chưa đồng ý với Điều khoản sử dụng.",
                          })}
                          value={true}
                        />
                        <label htmlFor="agree">
                          Đồng ý với{" "}
                          <strong>
                            <Link to="/ve-chung-toi">Điều khoản sử dụng</Link>
                          </strong>{" "}
                          của chúng tôi.
                        </label>
                        {errors.agree && errorMessage(errors.agree.message)}
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <input
                      className="btn-fill btn-primary"
                      type="submit"
                      value={loading ? "Loading..." : "Đăng ký"}
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
                  Bạn đã có tài khoản?{" "}
                  <Link to="/dang-nhap">Đăng nhập ngay</Link>
                </label>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
              <div className="widget">
                <AboutUs/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Signup Area End Here */}
      <Footer />
    </div>
  );
}

export default Signup;
