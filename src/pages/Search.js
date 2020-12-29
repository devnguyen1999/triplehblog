import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
function Search() {
  const [loadinggg, setLoadinggg] = useState(true);
  const [searching, setSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState();
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
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const formatTime = (time) => {
    const d = new Date(time);
    const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return result;
  };
  const searchSubmit = (event) => {
    setSearching(true);
    axios({
      method: "post",
      url: ApiBaseURL("post/search"),
      data: {
        keySearch: document.getElementById("search").value,
      },
    })
      .then((response) => {
        console.log(response.data);
        setSearchMessage(response.data.message);
        setPosts(response.data.data);
        setTotal(response.data.data.length);
        setSearching(false);
      })
      .catch((error) => {});
  };
  const search = () => {
    if (searching) {
      return (
        <div className="input-group-btn">
          <button type="button" className="btn-search" disabled>
            <i className="fal fa-hourglass-half" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="input-group-btn">
          <button
            type="button"
            className="btn-search"
            onClick={(event) => {
              searchSubmit(event);
            }}
          >
            <i className="flaticon-search" />
          </button>
        </div>
      );
    }
  };
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    axios({
      method: "get",
      url: ApiBaseURL("post/load?page=" + pageNumber + "&pageSize=" + pageSize),
    })
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    document.title = "Tìm kiếm";
    const requestPosts = axios.get(
      ApiBaseURL("post/load?page=" + page + "&pageSize=" + pageSize)
    );
    const requestTrendingPosts = axios.get(ApiBaseURL("post/loadMostViews"));
    const requestLatestPosts = axios.get(ApiBaseURL("post/loadLatest"));
    axios
      .all([requestPosts, requestTrendingPosts, requestLatestPosts])
      .then(
        axios.spread((...responses) => {
          setTotal(responses[0].data.total);
          setPosts(responses[0].data.data);
          setTrendingPosts(responses[1].data.data);
          setLatestPosts(responses[2].data.data);

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
        {/* Inne Page Banner Area Start Here */}
        <section className="inner-page-banner bg-common">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>Tìm kiếm</h1>
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>Tìm kiếm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inne Page Banner Area End Here */}
        {/* Recipe With Sidebar Area Start Here */}
        <section className="all-recipes-page-wrap padding-top-80 padding-bottom-22">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-8">
                <div className="adv-search-wrap">
                  <div className="input-group">
                    <input
                      id="search"
                      name="search"
                      type="text"
                      className="form-control"
                      placeholder="Nhập tiêu đề muốn tìm kiếm..."
                    />
                    <div className="btn-group">
                      {/* <div className="input-group-btn">
                      <button
                        type="button"
                        id="adv-serch"
                        className="btn-adv-serch"
                      >
                        <i className="icon-plus flaticon-add-plus-button" />
                        <i className="icon-minus fas fa-minus" />
                        Advanced Search
                      </button>
                    </div> */}
                      {/* <div className="input-group-btn">
                        <button
                          type="button"
                          className="btn-search"
                          onClick={(event) => {
                            searchSubmit(event);
                          }}
                        >
                          <i className="flaticon-search" />
                        </button>
                      </div> */}
                      {search()}
                    </div>
                  </div>
                  {/* <div className="advance-search-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="item-title">BY CATEGORIES</h3>
                      <ul className="search-items">
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox101" type="checkbox" />
                            <label htmlFor="checkbox101">Baking</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox102" type="checkbox" />
                            <label htmlFor="checkbox102">Dinner</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox103" type="checkbox" />
                            <label htmlFor="checkbox103">Lunch</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox104" type="checkbox" />
                            <label htmlFor="checkbox104">Sea Food</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox105" type="checkbox" />
                            <label htmlFor="checkbox105">Sweets</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="item-title">BY INGREDIENTS</h3>
                      <ul className="search-items">
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox106" type="checkbox" />
                            <label htmlFor="checkbox106">Oil</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox107" type="checkbox" />
                            <label htmlFor="checkbox107">Vegitables</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox108" type="checkbox" />
                            <label htmlFor="checkbox108">Fish</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox109" type="checkbox" />
                            <label htmlFor="checkbox109">White Salt</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox110" type="checkbox" />
                            <label htmlFor="checkbox110">Pizza </label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox111" type="checkbox" />
                            <label htmlFor="checkbox111">Meat</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox112" type="checkbox" />
                            <label htmlFor="checkbox112">Juice</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="item-title">BY CUISINE</h3>
                      <ul className="search-items">
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox113" type="checkbox" />
                            <label htmlFor="checkbox113">Indian</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox114" type="checkbox" />
                            <label htmlFor="checkbox114">Italian</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox115" type="checkbox" />
                            <label htmlFor="checkbox115">Maxican</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox116" type="checkbox" />
                            <label htmlFor="checkbox116">Bengali</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox117" type="checkbox" />
                            <label htmlFor="checkbox117">Franch</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="item-title">BY METHOD</h3>
                      <ul className="search-items">
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox118" type="checkbox" />
                            <label htmlFor="checkbox118">Baking</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox119" type="checkbox" />
                            <label htmlFor="checkbox119">Freezing</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox120" type="checkbox" />
                            <label htmlFor="checkbox120">Frying</label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox121" type="checkbox" />
                            <label htmlFor="checkbox121">Grilling</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                </div>
                <h3>{searchMessage}</h3>
                <div className="row">
                  {posts.map((value, key) => {
                    return (
                      <div className="col-md-6 col-12" key={key}>
                        <div className="product-box-layout1">
                          <figure className="item-figure">
                            <Link to={"/" + value.nameUrl}>
                              <img
                                src={value.img}
                                alt={value.title}
                                className="img-search-post"
                              />
                            </Link>
                          </figure>
                          <div className="item-content">
                            <span className="sub-title text-uppercase">{value.category}</span>
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
                  })}
                </div>
                <Pagination
                  hideDisabled
                  totalItemsCount={total}
                  onChange={(pageNumber) => {
                    handlePageChange(pageNumber);
                  }}
                  activePage={page}
                  itemsCountPerPage={pageSize}
                  pageRangeDisplayed={3}
                />
              </div>
              <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
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
                <div className="widget">
                  <div className="section-heading heading-dark">
                    <h3 className="item-heading">INSTAGRAM</h3>
                  </div>
                  <div className="widget-instagram">
                    <ul>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure9.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure10.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure11.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure12.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure13.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure14.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure15.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure16.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="item-box">
                          <img
                            src="../assets/img/social-figure/social-figure17.jpg"
                            alt="Social Figure"
                            className="img-fluid"
                          />
                          <a href="#!" className="item-icon">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </li>
                    </ul>
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
        {/* Recipe With Sidebar Area End Here */}
        <Footer />
      </div>
    );
  }
}

export default Search;
