import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { FormatTime } from "../helpers/FormatTime";
import { Redirect, Link, useParams } from "react-router-dom";
import { getToken, getUser } from "../helpers/HandleUser";
import { useForm } from "react-hook-form";
import LatestPosts from "../components/LatestPosts";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import HotTags from "../components/HotTags";

function PostDetail() {
  const [loadinggg, setLoadinggg] = useState(true);
  const [notFound, setNotFound] = useState(false);
  let { slug } = useParams();
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const errorMessage = (error) => {
    return <span className="error mt-2 d-block">{error}</span>;
  };
  const onSubmit = (values, event) => {
    if (getUser()) {
      setError(null);
      setLoading(true);
      axios({
        method: "post",
        url: ApiBaseURL("comment/create"),
        headers: {
          token: getToken(),
        },
        data: {
          postId: post.id,
          content: values.comment,
        },
      })
        .then((response) => {
          setLoading(false);
          if (response.data.success) {
            let date = new Date();
            setComments(
              comments.concat({
                content: values.comment,
                user: getUser(),
                createdAt: date.toISOString(),
              })
            );
            event.target.reset();
          } else {
            setError("Có lỗi xảy ra. Vui lòng thử lại.");
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError("Có lỗi xảy ra. Vui lòng thử lại.");
        });
    } else {
      setError("Bạn phải đăng nhập mới có thể bình luận về bài viết.");
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: ApiBaseURL("post/load/" + slug),
    })
      .then((response) => {
        document.title = response.data.title;
        setPost(response.data);
        setTags(response.data.tags);
        setComments(response.data.comments);
        setLoadinggg(false);
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
    const URL = window.location.href;
    console.log(URL);
    return (
      <div>
        <Header />
        {/* Inne Page Banner Area Start Here */}
        <section className="inner-page-banner bg-common">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs-area">
                  <h1>Chi tiết bài viết</h1>
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>{post.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Inne Page Banner Area End Here */}
        {/* Submit Recipe Area Start Here */}
        <section className="single-blog-page-wrap padding-top-80 padding-bottom-50">
          <div className="container">
            <div className="row gutters-60">
              <div className="col-lg-8">
                <div className="single-blog-box">
                  <div className="main-figure">
                    <a href="#!">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="img-detail"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta">
                      <li className="mr-5">
                        <a href="#!">
                          <i className="fas fa-clock" />
                          {FormatTime(post.createdAt)}
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fas fa-comments" />
                          Comments <span>{comments.length}</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className="item-title">
                      <a href="#!">{post.title}</a>
                    </h3>
                    <div
                      className="item-details"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                  <div className="tag-share">
                    <ul>
                      <li>
                        <ul className="inner-tag">
                          {tags.map((value, key) => {
                            return (
                              <li key={key}>
                                <Link to={"/tag/" + encodeURIComponent(value)}>
                                  {value}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li>
                        <ul className="inner-share">
                          <li>
                            <div
                              className="fb-share-button"
                              data-href={URL}
                              data-layout="button_count"
                              data-size="large"
                            >
                              <a
                                // eslint-disable-next-line react/jsx-no-target-blank
                                target="_blank"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftriplehblog.vercel.app%2F&amp;src=sdkpreparse"
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="recipe-reviews">
                    <div className="section-heading3 heading-dark">
                      <h2 className="item-heading">BÌNH LUẬN</h2>
                    </div>
                    <ul>
                      {comments.map((value, key) => {
                        return (
                          <li className="reviews-single-item" key={key}>
                            <div className="media media-none--xs">
                              <img
                                src="../assets/img/blog/comment2.jpg"
                                alt="Avatar"
                                className="media-img-auto"
                              />
                              <div className="media-body">
                                <h4 className="comment-title">
                                  {value.user.name}
                                </h4>
                                <span className="post-date">
                                  {FormatTime(value.createdAt)}
                                </span>
                                <p>{value.content}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="leave-review">
                    <div className="section-heading3 heading-dark">
                      <h2 className="item-heading">ĐỂ LẠI BÌNH LUẬN</h2>
                    </div>
                    <form
                      className="leave-form-box"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row">
                        <div className="col-12 form-group">
                          <label>Bình luận :</label>
                          <textarea
                            className="textarea form-control"
                            id="comment"
                            name="comment"
                            rows={7}
                            cols={20}
                            defaultValue={""}
                            ref={register({
                              required: "Bình luận không được để trống.",
                            })}
                          />
                          {errors.comment &&
                            errorMessage(errors.comment.message)}
                        </div>
                        <div className="col-12 form-group mb-0">
                          <input
                            type="submit"
                            className="item-btn"
                            value={loading ? "Loading..." : "ĐĂNG BÌNH LUẬN"}
                            disabled={loading}
                          />
                          {error && (
                            <>
                              <span className="error mt-3 d-block">
                                {error}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="form-response" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget-area sidebar-break-md">
                <div className="widget">
                  <LatestPosts />
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
                        src="../assets/img/figure/figure6.jpg"
                        alt="Ad"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="widget">
                  <Categories />
                </div>
                {/* <div className="widget">
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
                </div> */}
                <div className="widget">
                  <FeaturedPosts />
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
                  <HotTags />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Submit Recipe Area End Here */}
        <Footer />
      </div>
    );
  }
}

export default PostDetail;
