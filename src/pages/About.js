import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestPosts from "../components/LatestPosts";

function About() {
  useEffect(() => {document.title = "Về chúng tôi";}, []);
  return (
    <div>
        <Header/>
      {/* Inne Page Banner Area Start Here */}
      <section
        className="inner-page-banner bg-common"
        data-bg-image="img/figure/inner-page-banner1.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Về chúng tôi</h1>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>Về chúng tôi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inne Page Banner Area End Here */}
      {/* Recipe With Sidebar Area Start Here */}
      <section className="all-recipes-page-wrap padding-top-80 padding-bottom-50">
        <div className="container">
          <div className="row gutters-60">
            <div className="col-lg-8">
              <div className="about-box">
                <div className="about-figure">
                  <img src="../assets/img/figure/about2.jpg" alt="About" />
                </div>
                <h2 className="about-title title-bar bar-center">
                  Rosario Kareon
                </h2>
                <p className="item-description">
                  More off this less hello salamander lied porpoise much over
                  tightly circa horse taped so innocuously side crudey mightily
                  rigorous plot life. New homes in particular are subject.All
                  recipes created with FoodiePress have suport for Micoformats
                  and Google Recipe View. Schema.org is a collaboration byo
                  improve the web by creatinegaera structured data markupore off
                  this less hello salamander lied porpoise much over
                  tightlyapedey innocuouslylife.
                </p>
                <div className="section-heading heading-dark">
                  <h2 className="item-heading">GỬI PHẢN HỒI CHO CHÚNG TÔI</h2>
                </div>
                <form className="about-contact-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Tên *"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="E-mail *"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        placeholder="Chủ đề *"
                        className="form-control"
                        name="subject"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows={7}
                        cols={20}
                      />
                    </div>
                    <div className="col-12 form-group mb-0 mt-3">
                      <button type="submit" className="item-btn">
                        GỬI PHẢN HỒI
                      </button>
                    </div>
                    <div className="form-response" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">SUBSCRIBE &amp; FOLLOW</h3>
                </div>
                <div className="widget-follow-us">
                  <ul>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-facebook-f" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-twitter" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-linkedin-in" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-pinterest-p" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-instagram" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#!">
                        <i className="fab fa-youtube" />
                        Subscribe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <LatestPosts/>
              </div>
              <div className="widget">
                <div className="widget-ad">
                  <a href="#!">
                    <img
                      src="../assets/img/figure/figure4.jpg"
                      alt="Ad"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recipe With Sidebar Area End Here */}
      <Footer/>
    </div>
  );
}

export default About;
