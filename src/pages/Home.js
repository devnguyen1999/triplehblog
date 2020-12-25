import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Redirect, Link } from "react-router-dom";

function Home() {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  const [slider, setSlider] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const formatTime = (time) => {
    const d = new Date(time);
    const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return result;
  };
  useEffect(() => {
    const requestSlider = axios.get(ApiBaseURL("post/load?page=1&pageSize=3"));
    const requestRandomPosts = axios.get(
      ApiBaseURL("post/load?page=1&pageSize=3")
    );
    const requestCategories = axios.get(ApiBaseURL("category/load"));
    axios
      .all([requestSlider, requestRandomPosts, requestCategories])
      .then(
        axios.spread((...responses) => {
          console.log(responses[0].data.data);
          setSlider(responses[0].data.data);
          console.log(responses[1].data.data);
          setRandomPosts(responses[1].data.data);
        })
      )
      .catch((errors) => {});
  }, []);
  return (
    <div>
      <Header />
      {/* Slider Area Start Here */}
      <section className="ranna-slider-area">
        <div className="container">
          <Slider {...settings}>
            {slider.map((value, key) => {
              return (
                <div className="ranna-slider-content-layout1" key={key}>
                  <figure className="item-figure">
                    <Link to={"/" + value.nameUrl}>
                      <img
                        src={value.img}
                        alt={value.title}
                      />
                    </Link>
                  </figure>
                  <div className="item-content">
                    <span className="sub-title text-uppercase">
                      {value.category}
                    </span>
                    <h2 className="item-title">
                      <Link to={"/" + value.nameUrl}>{value.title}</Link>
                    </h2>
                    <p>{value.summary}</p>
                    <ul className="entry-meta">
                      <li>
                        <a href="#!">
                          <i className="fas fa-clock" />
                          {formatTime(value.createdAt)}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fas fa-user" />
                          <span>John Martin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fas fa-heart" />
                          <span>02</span> Likes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* Slider Area End Here */}
      {/* Random Recipe Start Here */}
      <section className="padding-bottom-18">
        <div className="container">
          <div className="row">
            {slider.map((value, key) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={key}>
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <Link to={"/" + value.nameUrl}>
                        <img
                          src={value.img}
                          alt={value.title}
                        />
                      </Link>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">{value.category}</span>
                      <h3 className="item-title">
                        <Link to={"/" + value.nameUrl}>
                        {value.title}
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Random Recipe End Here */}
      {/* Trending Recipe Start Here */}
      <section className="padding-bottom-45">
        <div className="container">
          <div className="row gutters-60">
            <div className="col-lg-8">
              <div className="section-heading heading-dark">
                <h2 className="item-heading">MÓN ĂN THỊNH HÀNH</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product4.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">PASTA</span>
                      <h2 className="item-title">
                        <a href="#!">
                          Chanterelle and Porcini Mushroom Recipes
                        </a>
                      </h2>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa horse taped so innocuously side crud
                        mightily rigorous plot life. New homes in particular are
                        subject.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product5.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">CHICKEN</span>
                      <h3 className="item-title">
                        <a href="#!">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product6.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">SALAD</span>
                      <h3 className="item-title">
                        <a href="#!">Italiano Salad Mixed</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product7.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">DINNER</span>
                      <h3 className="item-title">
                        <a href="#!">Maxican Dessert</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product8.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">JUICE</span>
                      <h3 className="item-title">
                        <a href="#!">Soypan Fruits Juice</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product9.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">BREAKFAST</span>
                      <h3 className="item-title">
                        <a href="#!">Crepes with Forest</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product10.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">DINNER</span>
                      <h3 className="item-title">
                        <a href="#!">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ranna-ad-box">
                <a href="#!">
                  <img src="../assets/img/figure/figure1.jpg" alt="ad" />
                </a>
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
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">MÓN ĂN MỚI NHẤT</h3>
                </div>
                <div className="widget-latest">
                  <ul className="block-list">
                    <li className="single-item">
                      <div className="item-img">
                        <a href="#!">
                          <img
                            src="../assets/img/product/latest1.jpg"
                            alt="Post"
                          />
                        </a>
                        <div className="count-number">1</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#!">
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
                        <a href="#!">
                          <img
                            src="../assets/img/product/latest2.jpg"
                            alt="Post"
                          />
                        </a>
                        <div className="count-number">2</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#!">
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
                        <a href="#!">
                          <img
                            src="../assets/img/product/latest3.jpg"
                            alt="Post"
                          />
                        </a>
                        <div className="count-number">3</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#!">
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
                        <a href="#!">
                          <img
                            src="../assets/img/product/latest4.jpg"
                            alt="Post"
                          />
                        </a>
                        <div className="count-number">4</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#!">
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
                        <a href="#!">
                          <img
                            src="../assets/img/product/latest2.jpg"
                            alt="Post"
                          />
                        </a>
                        <div className="count-number">3</div>
                      </div>
                      <div className="item-content">
                        <div className="item-ctg">DESERT</div>
                        <h4 className="item-title">
                          <a href="#!">
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
                  <a href="#!">
                    <img
                      src="../assets/img/figure/figure2.jpg"
                      alt="Ad"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">THỂ LOẠI</h3>
                </div>
                <div className="widget-categories">
                  <ul>
                    <li>
                      <a href="#!">
                        BreakFast
                        <span>25</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Lunch
                        <span>15</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Pasta
                        <span>22</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Dinner
                        <span>18</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Dessert
                        <span>36</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Drinks
                        <span>12</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-newsletter-subscribe">
                  <h3>NHẬN CẬP NHẬT MỚI NHẤT</h3>
                  <p>Đăng ký bản tin</p>
                  <form className="newsletter-subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Email của bạn"
                        className="form-control"
                        name="email"
                        data-error="E-mail field is required"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group mb-none">
                      <button type="submit" className="item-btn">
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Recipe End Here */}
      {/* Editor’s Choice Start Here */}
      <section className="padding-bottom-45">
        <div className="container">
          <div className="section-heading heading-dark">
            <h2 className="item-heading">LỰA CHỌN CỦA EDITOR</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="product-box-layout2">
                <figure className="item-figure">
                  <a href="#!">
                    <img
                      src="../assets/img/product/product11.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">BREAKFAST</span>
                  <h3 className="item-title">
                    <a href="#!">Tomatoes Stuffed with Foie and Chanterelles</a>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      <a href="#!">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-user" />
                        by
                        <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-heart" />
                        <span>02</span> Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="product-box-layout2">
                <figure className="item-figure">
                  <a href="#!">
                    <img
                      src="../assets/img/product/product12.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">DESERT</span>
                  <h3 className="item-title">
                    <a href="#!">Pumpkin Cheesecake With GingersnapCrust</a>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      <a href="#!">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-user" />
                        by
                        <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-heart" />
                        <span>02</span> Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-block d-md-none d-lg-block col-sm-12 col-12">
              <div className="product-box-layout2">
                <figure className="item-figure">
                  <a href="#!">
                    <img
                      src="../assets/img/product/product13.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">JUICE</span>
                  <h3 className="item-title">
                    <a href="#!">Blueberry Juice with Lemon Crema</a>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      <a href="#!">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-user" />
                        by
                        <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fas fa-heart" />
                        <span>02</span> Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Editor’s Choice End Here */}
      {/* Popular Recipe Start Here */}
      <section className="padding-bottom-45">
        <div className="container">
          <div className="row gutters-60">
            <div className="col-lg-8">
              <div className="section-heading heading-dark">
                <h2 className="item-heading">MÓN ĂN PHỔ BIẾN</h2>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout3">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product14.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">BREAKFAST</span>
                      <h3 className="item-title">
                        <a href="#!">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        Pro sint falli definitiones noel ei verear intellegatpri
                        civibus consequat efficiantue.Vestibulum ante ipsum
                        primis in fau cibus orci luctus et ultrices posuere
                        cubilia Curae; Nunc mattis turpis id aliquet.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout3">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product15.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">SEA FOOD</span>
                      <h3 className="item-title">
                        <a href="#!">Italiano Salad Mixed</a>
                      </h3>
                      <p>
                        Pro sint falli definitiones noel ei verear intellegatpri
                        civibus consequat efficiantue.Vestibulum ante ipsum
                        primis in fau cibus orci luctus et ultrices posuere
                        cubilia Curae; Nunc mattis turpis id aliquet.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout3">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product16.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">SALAD</span>
                      <h3 className="item-title">
                        <a href="#!">Maxican Dessert</a>
                      </h3>
                      <p>
                        Pro sint falli definitiones noel ei verear intellegatpri
                        civibus consequat efficiantue.Vestibulum ante ipsum
                        primis in fau cibus orci luctus et ultrices posuere
                        cubilia Curae; Nunc mattis turpis id aliquet.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-lg-block d-xl-none col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="product-box-layout3">
                    <figure className="item-figure">
                      <a href="#!">
                        <img
                          src="../assets/img/product/product14.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">BREAKFAST</span>
                      <h3 className="item-title">
                        <a href="#!">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        Pro sint falli definitiones noel ei verear intellegatpri
                        civibus consequat efficiantue.Vestibulum ante ipsum
                        primis in fau cibus orci luctus et ultrices posuere
                        cubilia Curae; Nunc mattis turpis id aliquet.
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="#!">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-user" />
                            by
                            <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fas fa-heart" />
                            <span>02</span> Likes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">BÀI VIẾT NỔI BẬT</h3>
                </div>
                <div className="widget-featured-feed">
                  <Slider {...settings}>
                    <div className="featured-box-layout1">
                      <div className="item-img">
                        <img
                          src="../assets/img/product/product17.jpg"
                          alt="Brand"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item-content">
                        <span className="ctg-name">BREAKFAST</span>
                        <h4 className="item-title">
                          <a href="#!">Baked Garlic Prawn</a>
                        </h4>
                        <p>
                          Definitiones noel ei verear intelle gatpri civibus
                          consequat area refund efficiantue.
                        </p>
                      </div>
                    </div>
                    <div className="featured-box-layout1">
                      <div className="item-img">
                        <img
                          src="../assets/img/product/product18.jpg"
                          alt="Brand"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item-content">
                        <span className="ctg-name">DINNER</span>
                        <h4 className="item-title">
                          <a href="#!">Baked Garlic Prawn</a>
                        </h4>
                        <p>
                          Definitiones noel ei verear intelle gatpri civibus
                          consequat area refund efficiantue.
                        </p>
                      </div>
                    </div>
                    <div className="featured-box-layout1">
                      <div className="item-img">
                        <img
                          src="../assets/img/product/product19.jpg"
                          alt="Brand"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item-content">
                        <span className="ctg-name">SALAD</span>
                        <h4 className="item-title">
                          <a href="#!">Baked Garlic Prawn</a>
                        </h4>
                        <p>
                          Definitiones noel ei verear intelle gatpri civibus
                          consequat area refund efficiantue.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="widget">
                <div className="section-heading heading-dark">
                  <h3 className="item-heading">TAGS PHỔ BIẾN</h3>
                </div>
                <div className="widget-tag">
                  <ul>
                    <li>
                      <a href="#!">DESERT</a>
                    </li>
                    <li>
                      <a href="#!">CAKE</a>
                    </li>
                    <li>
                      <a href="#!">BREAKFAST</a>
                    </li>
                    <li>
                      <a href="#!">BURGER</a>
                    </li>
                    <li>
                      <a href="#!">DINNER</a>
                    </li>
                    <li>
                      <a href="#!">PIZZA</a>
                    </li>
                    <li>
                      <a href="#!">SEA FOOD</a>
                    </li>
                    <li>
                      <a href="#!">SALAD</a>
                    </li>
                    <li>
                      <a href="#!">JUICE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Recipe End Here */}
      {/* Instagram Start Here */}
      <section className="instagram-feed-wrap">
        <div className="instagram-feed-title">
          <a href="#!">
            <i className="fab fa-instagram" />
            Follow Trên Instagram
          </a>
        </div>
        <ul className="instagram-feed-figure">
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure1.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure2.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure3.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure4.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure5.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure6.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure7.jpg"
                alt="Social"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                src="../assets/img/social-figure/social-figure8.jpg"
                alt="Social"
              />
            </a>
          </li>
        </ul>
      </section>
      {/* Instagram End Here */}
      <Footer />
    </div>
  );
}

export default Home;
