import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link } from "react-router-dom";

function Home() {
  const [loadinggg, setLoadinggg] = useState(true);

  function Arrow() {
    return <span className="d-none"></span>;
  }

  let settings = {
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    prevArrow: <Arrow/>,
    nextArrow: <Arrow/>,
  };
  const [slider, setSlider] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [choicedPosts, setChoicedPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const formatTime = (time) => {
    const d = new Date(time);
    const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return result;
  };
  useEffect(() => {
    document.title = "Triple H Blog";
    const requestSlider = axios.get(ApiBaseURL("post/load?page=1&pageSize=3"));
    const requestRandomPosts = axios.get(ApiBaseURL("post/loadRandom"));
    const requestTrendingPosts = axios.get(ApiBaseURL("post/loadMostViews"));
    const requestLatestPosts = axios.get(ApiBaseURL("post/loadLatest"));
    const requestCategories = axios.get(ApiBaseURL("category/load"));
    const requestChoicedPosts = axios.get(ApiBaseURL("post/loadRandom"));
    const requestPopularPosts = axios.get(ApiBaseURL("post/loadMostViews"));
    axios
      .all([
        requestSlider,
        requestRandomPosts,
        requestTrendingPosts,
        requestLatestPosts,
        requestCategories,
        requestChoicedPosts,
        requestPopularPosts,
      ])
      .then(
        axios.spread((...responses) => {
          setSlider(responses[0].data.data);
          setRandomPosts(responses[1].data.data);
          setTrendingPosts(responses[2].data.data);
          setLatestPosts(responses[3].data.data);
          setCategories(responses[4].data.data);
          setChoicedPosts(responses[5].data.data);
          setPopularPosts(responses[6].data.data);

          setLoadinggg(false);
        })
      )
      .catch((errors) => {});
  }, []);
  if (loadinggg) {
    return <div id="preloader"></div>;
  } else {
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
                        <img
                          className="img-slider"
                          src={value.img}
                          alt={value.title}
                        />
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
              {randomPosts.map((value, key) => {
                let classNameStr = "";
                if (key === 2) {
                  classNameStr =
                    "col-lg-4 d-block d-md-none d-lg-block col-sm-12";
                } else {
                  classNameStr = "col-lg-4 col-md-6 col-sm-12";
                }
                return (
                  <div className={classNameStr} key={key}>
                    <div className="product-box-layout1">
                      <figure className="item-figure">
                        <Link to={"/" + value.nameUrl}>
                          <img
                            className="img-random-post"
                            src={value.img}
                            alt={value.title}
                          />
                        </Link>
                      </figure>
                      <div className="item-content">
                        <span className="sub-title text-uppercase">
                          {value.category}
                        </span>
                        <h3 className="item-title">
                          <Link to={"/" + value.nameUrl}>{value.title}</Link>
                        </h3>
                        <ul className="entry-meta">
                          <li>
                            <a href="#!">
                              <i className="fas fa-clock" />
                              {formatTime(value.createdAt)}
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
                  <h2 className="item-heading">BÀI VIẾT THỊNH HÀNH</h2>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="product-box-layout1">
                      <figure className="item-figure">
                        <Link to={"/" + trendingPosts[0].nameUrl}>
                          <img
                            src={trendingPosts[0].img}
                            alt={trendingPosts[0].title}
                            className="img-trending-first-post"
                          />
                        </Link>
                      </figure>
                      <div className="item-content">
                        <span className="sub-title text-uppercase">
                          {trendingPosts[0].categories}
                        </span>
                        <h2 className="item-title">
                          <Link to={"/" + trendingPosts[0].nameUrl}>
                            {trendingPosts[0].title}
                          </Link>
                        </h2>
                        <p>{trendingPosts[0].summary}</p>
                        <ul className="entry-meta">
                          <li>
                            <a href="#!">
                              <i className="fas fa-clock" />
                              {formatTime(trendingPosts[0].createdAt)}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {trendingPosts.map((value, key) => {
                    if (key >= 1) {
                      return (
                        <div className="col-md-6 col-sm-6 col-12" key={key}>
                          <div className="product-box-layout1">
                            <figure className="item-figure">
                              <Link to={"/" + value.nameUrl}>
                                <img
                                  className="img-trending-post"
                                  src={value.img}
                                  alt={value.title}
                                />
                              </Link>
                            </figure>
                            <div className="item-content">
                              <span className="sub-title text-uppercase">
                                {value.category}
                              </span>
                              <h3 className="item-title">
                                <Link to={"/" + value.nameUrl}>
                                  {value.title}
                                </Link>
                              </h3>
                              <p>{value.summary}</p>
                              <ul className="entry-meta">
                                <li>
                                  <a href="#!">
                                    <i className="fas fa-clock" />
                                    {formatTime(value.createdAt)}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
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
                      <h3>Three Heroes</h3>
                    </figure>
                    <p>From UIT with love.</p>
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
                    <h3 className="item-heading">BÀI VIẾT MỚI NHẤT</h3>
                  </div>
                  <div className="widget-blog-post">
                    <ul className="block-list">
                      {latestPosts.map((value, key) => {
                        return (
                          <li className="single-item" key={key}>
                            <div className="item-img">
                              <Link to={"/" + value.nameUrl}>
                                <img
                                  className="img-side-bar"
                                  src={value.img}
                                  alt={value.title}
                                />
                              </Link>
                            </div>
                            <div className="item-content">
                              <div className="item-post-date">
                                <a href="#!" className="text-uppercase">
                                  {value.category}
                                </a>
                              </div>
                              <h4 className="item-title">
                                <Link to={"/" + value.nameUrl}>
                                  {value.title}
                                </Link>
                              </h4>
                              <div className="item-post-by">
                                <a href="#!">
                                  <i className="fas fa-clock" />
                                  {formatTime(value.createdAt)}
                                </a>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <div className="section-heading heading-dark">
                    <h3 className="item-heading">THỂ LOẠI</h3>
                  </div>
                  <div className="widget-categories">
                    <ul>
                      {categories.map((value, key) => {
                        return (
                          <li key={key}>
                            <Link to={"/the-loai/" + value.nameUrl}>
                              {value.name}
                              <span>25</span>
                            </Link>
                          </li>
                        );
                      })}
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
              {choicedPosts.map((value, key) => {
                let classNameStr = "";
                if (key === 2) {
                  classNameStr =
                    "col-lg-4 d-block d-md-none d-lg-block col-sm-12 col-12";
                } else {
                  classNameStr = "col-lg-4 col-md-6 col-sm-12 col-12";
                }
                return (
                  <div className={classNameStr} key={key}>
                    <div className="product-box-layout2">
                      <figure className="item-figure">
                        <Link to={"/" + value.nameUrl}>
                          <img src={value.img} alt={value.title} />
                        </Link>
                      </figure>
                      <div className="item-content">
                        <span className="sub-title text-uppercase">
                          {value.category}
                        </span>
                        <h3 className="item-title">
                          <Link to={"/" + value.nameUrl}>{value.title}</Link>
                        </h3>
                        <ul className="entry-meta">
                          <li>
                            <a href="#!">
                              <i className="fas fa-clock" />
                              {formatTime(value.createdAt)}
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
        {/* Editor’s Choice End Here */}
        {/* Popular Recipe Start Here */}
        <section className="padding-bottom-45">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-8">
                <div className="section-heading heading-dark">
                  <h2 className="item-heading">BÀI VIẾT PHỔ BIẾN</h2>
                </div>
                <div className="row">
                  {popularPosts.map((value, key) => {
                    if (key < 4) {
                      let classNameStr = "";
                      if (key === 3) {
                        classNameStr =
                          "d-lg-block d-xl-none col-lg-6 col-md-6 col-sm-6 col-12";
                      } else {
                        classNameStr =
                          "col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12";
                      }
                      return (
                        <div className={classNameStr} key={key}>
                          <div className="product-box-layout3">
                            <figure className="item-figure">
                              <Link to={"/" + value.nameUrl}>
                                <img
                                  src={value.img}
                                  alt={value.title}
                                  className="img-popular-post"
                                />
                              </Link>
                            </figure>
                            <div className="item-content">
                              <span className="sub-title">
                                {value.category}
                              </span>
                              <h3 className="item-title">
                                <Link to={"/" + value.nameUrl}>
                                  {value.title}
                                </Link>
                              </h3>
                              <p>{value.summary}</p>
                              <ul className="entry-meta">
                                <li>
                                  <a href="#!">
                                    <i className="fas fa-clock" />
                                    {formatTime(value.createdAt)}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                <div className="widget">
                  <div className="section-heading heading-dark">
                    <h3 className="item-heading">BÀI VIẾT NỔI BẬT</h3>
                  </div>
                  <div className="widget-featured-feed">
                    <Slider {...settings}>
                      {trendingPosts.map((value, key) => {
                        return (
                          <div className="featured-box-layout1" key={key}>
                            <div className="item-img">
                              <img
                                src={value.img}
                                alt={value.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="item-content">
                              <span className="ctg-name text-uppercase"></span>
                              <h4 className="item-title">
                                <Link to={"/" + value.nameUrl}>
                                  {value.title}
                                </Link>
                              </h4>
                              <p>{value.summary}</p>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                <div className="widget">
                  <div className="section-heading heading-dark">
                    <h3 className="item-heading">TAG PHỔ BIẾN</h3>
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
}

export default Home;
