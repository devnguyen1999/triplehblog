import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Redirect, Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

function Category() {
  const [loadinggg, setLoadinggg] = useState(true);
  const [notFound, setNotFound] = useState(false);
  let { slug } = useParams();
  console.log(slug);
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
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [trendingPosts, setTrendingPosts] = useState([]);
  const formatTime = (time) => {
    const d = new Date(time);
    const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return result;
  };
  const getPosts = () => {
    setLoadinggg(true);
    axios({
      method: "get",
      url: ApiBaseURL("category/loadDetaiDetaiCategory?nameUrl=" + slug),
    })
      .then((response) => {
        setCategory(response.data.data);
        axios({
          method: "get",
          url: ApiBaseURL(
            "post/loadByCategory?page=" +
              page +
              "&pageSize=" +
              pageSize +
              "&category=" +
              response.data.data.name
          ),
        })
          .then((response) => {
            setPosts(response.data.data);
            console.log(response.data.data);
            setTotal(response.data.total);
            setLoadinggg(false);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setNotFound(true);
        }
      });
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
    const requestLatestPosts = axios.get(ApiBaseURL("post/loadLatest"));
    const requestCategories = axios.get(ApiBaseURL("category/load"));
    const requestTrendingPosts = axios.get(ApiBaseURL("post/loadMostViews"));
    axios
      .all([requestLatestPosts, requestCategories, requestTrendingPosts])
      .then(
        axios.spread((...responses) => {
          setLatestPosts(responses[0].data.data);
          setCategories(responses[1].data.data);
          console.log(responses[1].data.data);
          setTrendingPosts(responses[2].data.data);

          setLoadinggg(false);
        })
      )
      .catch((error) => {});
  }, []);
  useEffect(() => {
    console.log(slug);
    getPosts();
  }, [slug]);
  const { from } = { from: { pathname: "/loi-404" } };
  if (notFound) {
    return <Redirect to={from} />;
  }
  if (loadinggg) {
    return <div id="preloader"></div>;
  } else {
    console.log();
    return (
      <div>
        <Header />
        {/* Inne Page Banner Area Start Here */}
        <section className="inner-page-banner bg-common">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>Thể loại</h1>
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>{category.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inne Page Banner Area End Here */}
        {/* Blog List Area Start Here */}
        <section className="blog-list-page-wrap padding-top-80 padding-bottom-50">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-8">
                {posts.map((value, key) => {
                  return (
                    <div className="blog-box-layout1" key={key}>
                      <div className="item-figure">
                        <Link to={"/" + value.nameUrl}>
                          <img src={value.img} alt={value.title} />
                        </Link>
                      </div>
                      <div className="item-content">
                        <ul className="entry-meta">
                          <li className="mr-5">
                            <a href="#!">
                              <i className="fas fa-clock" />
                              {formatTime(value.createdAt)}
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fas fa-comments" />
                              Bình luận <span>({value.comments})</span>
                            </a>
                          </li>
                        </ul>
                        <h3 className="item-title">
                          <Link to={"/" + value.nameUrl}>{value.title}</Link>
                        </h3>
                        <p>{value.summary}</p>
                        <Link to={"/" + value.nameUrl} className="item-btn">
                          Xem thêm
                          <i className="flaticon-next" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
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
                    <h3 className="item-heading">POPULAR TAGS</h3>
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
        {/* Blog List Area End Here */}
        <Footer />
      </div>
    );
  }
}

export default Category;
