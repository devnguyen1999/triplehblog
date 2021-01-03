import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function Contact() {
  useEffect(() => {document.title = "Liên hệ";}, []);
  return (
    <div>
      <Header />
      {/* Inne Page Banner Area Start Here */}
      <section className="inner-page-banner bg-common">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Liên hệ với chúng tôi</h1>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inne Page Banner Area End Here */}
      {/* Contact Page Area Start Here */}
      <section className="contact-page-wrap">
        <div className="contact-box-left">
          <div className="container">
            <div className="section-heading heading-dark">
              <h3 className="item-heading-big">Địa chỉ của chúng tôi</h3>
            </div>
            <p>
              Nếu bạn muốn phản hồi về website của chúng tôi. Vui lòng liên hệ
              bằng một trong những cách thức dưới đây.
            </p>
            <div className="contact-address">
              <ul>
                <li>
                  <div className="item-icon">
                    <i className="fas fa-map" />
                  </div>
                  Khoa Mạng máy tính &#38; Truyền thông - Trường Đại học Công
                  nghệ Thông tin - Đại học Quốc Gia Thành phố Hồ Chí Minh
                </li>
                <li>
                  <div className="item-icon">
                    <i className="far fa-envelope" />
                  </div>
                  thanhdev@9699@gmail.com
                </li>
                <li>
                  <div className="item-icon">
                    <i className="fas fa-phone" />
                  </div>
                  034 234 0234
                </li>
                <li>
                  <div className="item-icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                  facebook.com/thanhdevil
                </li>
              </ul>
            </div>
            {/* <div className="section-heading heading-dark">
              <h3 className="item-heading-big">Gửi phản hồi cho chúng tôi</h3>
            </div>
            <form id="contact-form" className="contact-form-box">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Tên *"
                    className="form-control"
                    name="name"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="form-control"
                    name="email"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    placeholder="Chủ đề *"
                    className="form-control"
                    name="subject"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Nhập phản hồi của bạn..."
                    className="textarea form-control"
                    name="message"
                    id="form-message"
                    rows={7}
                    cols={20}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group mb-0 mt-3">
                  <button type="submit" className="item-btn">
                    GỬI PHẢN HỒI
                  </button>
                </div>
                <div className="form-response" />
              </div>
            </form> */}
          </div>
        </div>
        <div className="contact-box-right">
          <div className="google-map-wrap-layout1">
            <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2324288146724!2d106.80161941489283!3d10.869918392258182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1608852796214!5m2!1svi!2s" />
          </div>
        </div>
      </section>
      {/* Contact Page Area End Here */}

      <Footer />
    </div>
  );
}

export default Contact;
