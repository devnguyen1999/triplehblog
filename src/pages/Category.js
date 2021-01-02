import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { FormatTime } from '../helpers/FormatTime';
import { Redirect, Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import LatestPosts from "../components/LatestPosts";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import HotTags from "../components/HotTags";

function Category() {
  const [loadinggg, setLoadinggg] = useState(true);
  const [notFound, setNotFound] = useState(false);
  let { slug } = useParams();
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState();
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
    setLoadinggg(true);
    axios({
      method: "get",
      url: ApiBaseURL("category/loadDetaiDetaiCategory?nameUrl=" + slug),
    })
      .then((response) => {
        document.title = response.data.data.name;
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
  }, [slug]);
  const { from } = { from: { pathname: "/loi-404" } };
  if (notFound) {
    return <Redirect to={from} />;
  }
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
                              {FormatTime(value.createdAt)}
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
                  <LatestPosts/>
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
                  <Categories/>
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
                  <FeaturedPosts/>
                </div>
                <div className="widget">
                  <HotTags/>
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
