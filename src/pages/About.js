import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
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
                  <h2 className="item-heading">LIÊN HỆ NHANH VỚI CHÚNG TÔI</h2>
                </div>
                <form className="about-contact-form">
                  <div className="row">
                    <div className="col-md-4 form-group">
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
                    <div className="col-md-4 form-group">
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
                    <div className="col-md-4 form-group">
                      <input
                        type="text"
                        placeholder="Phone *"
                        className="form-control"
                        name="phone"
                        data-error="Subject field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message"
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
                        SEND MESSAGE
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
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#">
                        <i className="fab fa-instagram" />
                        Follow
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="#">
                        <i className="fab fa-youtube" />
                        Subscribe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">LATEST RECIPES</h3>
                </div>
                <div className="widget-latest">
                  <ul className="block-list">
                    <li className="single-item">
                      <div className="item-img">
                        <a href="#">
                          <img src="../assets/img/product/latest1.jpg" alt="Post" />
                        </a>
                        <div className="count-number">1</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span> John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="#">
                          <img src="../assets/img/product/latest2.jpg" alt="Post" />
                        </a>
                        <div className="count-number">2</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span> John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="#">
                          <img src="../assets/img/product/latest3.jpg" alt="Post" />
                        </a>
                        <div className="count-number">3</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span> John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="#">
                          <img src="../assets/img/product/latest4.jpg" alt="Post" />
                        </a>
                        <div className="count-number">4</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span> John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-ad">
                  <a href="#">
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
