import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Header />
      {/* Inne Page Banner Area Start Here */}
      <section
        className="inner-page-banner bg-common"
      >
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
              <h3 className="item-heading-big">Our Address</h3>
            </div>
            <p>
              Korem ipsum dolor sitter amet consectetuer adipiscing elitter
              Curabt ur ugueque habitant morbi tristique.
            </p>
            <div className="contact-address">
              <ul>
                <li>
                  <div className="item-icon">
                    <i className="fas fa-map" />
                  </div>
                  House #111/B, Street #05, New East NewYork City, Near rebay
                  resort -1111
                </li>
                <li>
                  <div className="item-icon">
                    <i className="far fa-envelope" />
                  </div>
                  rannarecipes@gmail.com
                </li>
                <li>
                  <div className="item-icon">
                    <i className="fas fa-phone" />
                  </div>
                  +123 5889 000 - 10, +123 8889 011 - 22
                </li>
                <li>
                  <div className="item-icon">
                    <i className="fas fa-fax" />
                  </div>
                  +9856000, +9856010
                </li>
              </ul>
            </div>
            <div className="section-heading heading-dark">
              <h3 className="item-heading-big">Send Us Message</h3>
            </div>
            <form id="contact-form" className="contact-form-box">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="form-control"
                    name="name"
                    data-error="Name field is required"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="form-control"
                    name="email"
                    data-error="E-mail field is required"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="form-control"
                    name="subject"
                    data-error="Subject field is required"
                    required
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Type your text"
                    className="textarea form-control"
                    name="message"
                    id="form-message"
                    rows={7}
                    cols={20}
                    data-error="Message field is required"
                    required
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group mb-0 mt-3">
                  <button type="submit" className="item-btn">
                    SUBMIT MESSAGE
                  </button>
                </div>
                <div className="form-response" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-box-right">
          <div className="google-map-wrap-layout1">
            <iframe src="https://maps.google.com/maps?q=-37.81618%2C%20144.95692&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </section>
      {/* Contact Page Area End Here */}

      <Footer />
    </div>
  );
}

export default Contact;
