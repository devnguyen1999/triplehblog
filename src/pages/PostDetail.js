import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { ApiBaseURL } from '../ApiBaseURL';
import { Redirect, Link, useParams } from 'react-router-dom';
import { getToken, getUser } from '../HandleUser';
import { useForm } from 'react-hook-form';

function PostDetail() {
  const [loadinggg, setLoadinggg] = useState(true);
  const [notFound, setNotFound] = useState(false);
  let { slug } = useParams();
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
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const formatTime = (time) => {
    const d = new Date(time);
    const result = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return result;
  };
  const errorMessage = (error) => {
    return <span className='error mt-2 d-block'>{error}</span>;
  };
  const onSubmit = (values, event) => {
    if (getUser()) {
      setError(null);
      setLoading(true);
      axios({
        method: 'post',
        url: ApiBaseURL('comment/create'),
        headers: {
          token: getToken(),
        },
        data: {
          postId: post.id,
          content: values.comment,
        },
      })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          if (response.data.success) {
            setComments(
              comments.concat({
                content: values.comment,
                user: getUser(),
                createdAt: '2020-12-25T19:18:29.039Z',
              })
            );
            console.log(comments);
            event.target.reset();
          } else {
            setError('Có lỗi xảy ra. Vui lòng thử lại.');
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError('Có lỗi xảy ra. Vui lòng thử lại.');
        });
    } else {
      setError('Bạn phải đăng nhập mới có thể bình luận về bài viết.');
    }
  };
  const getOtherPost = (nameUrl) => {
    setLoadinggg(true);
    setPost([]);
    const requestPost = axios.get(ApiBaseURL('post/load/' + nameUrl));
    axios
      .all([requestPost])
      .then(
        axios.spread((...responses) => {
          setPost(responses[0].data);
          setComments(responses[0].data.comments);
          setLoadinggg(false);
        })
      )
      .catch((errors) => {});
  };
  useEffect(() => {
    const requestPost = axios.get(ApiBaseURL('post/load/' + slug));
    const requestLatestPosts = axios.get(ApiBaseURL('post/loadLatest'));
    const requestCategories = axios.get(ApiBaseURL('category/load'));
    const requestTrendingPosts = axios.get(ApiBaseURL('post/loadMostViews'));
    axios
      .all([
        requestPost,
        requestLatestPosts,
        requestCategories,
        requestTrendingPosts,
      ])
      .then(
        axios.spread((...responses) => {
          document.title = responses[0].data.title;
          setPost(responses[0].data);
          console.log(responses[0].data.comments);
          setComments(responses[0].data.comments);
          setLatestPosts(responses[1].data.data);
          setCategories(responses[2].data.data);
          setTrendingPosts(responses[3].data.data);

          setLoadinggg(false);
        })
      )
      .catch((error) => {
        console.error(error.response.status);
        if (error.response.status === 404) {
          setNotFound(true);
        }
      });
  }, []);
  const { from } = { from: { pathname: '/loi-404' } };
  if (notFound) {
    return <Redirect to={from} />;
  }
  if (loadinggg) {
    return <div id='preloader'></div>;
  } else {
    const URL = window.location.pathname;
    return (
      <div>
        <Header />
        {/* Inne Page Banner Area Start Here */}
        <section className='inner-page-banner bg-common'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='breadcrumbs-area'>
                  <h1>Chi tiết bài viết</h1>
                  <ul>
                    <li>
                      <Link to='/'>Trang chủ</Link>
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
        <section className='single-blog-page-wrap padding-top-80 padding-bottom-50'>
          <div className='container'>
            <div className='row gutters-60'>
              <div className='col-lg-8'>
                <div className='single-blog-box'>
                  <div className='main-figure'>
                    <a href='#!'>
                      <img
                        src={post.img}
                        alt={post.title}
                        className='img-detail'
                      />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <ul className='entry-meta'>
                      <li className='mr-5'>
                        <a href='#!'>
                          <i className='fas fa-clock' />
                          {formatTime(post.createdAt)}
                        </a>
                      </li>
                      <li>
                        <a href='#!'>
                          <i className='fas fa-comments' />
                          Comments <span>{post.comments.length}</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className='item-title'>
                      <a href='#!'>{post.title}</a>
                    </h3>
                    <div
                      className='item-details'
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                  <div className='tag-share'>
                    <ul>
                      <li>
                        <ul className='inner-tag'>
                          {post.tags.map((value, key) => {
                            return (
                              <li key={key}>
                                <a href='#!'>{value}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li>
                        <ul className='inner-share'>
                          <li>
                            <a href='#!'>
                              <div
                                class='fb-share-button'
                                data-href={URL}
                                data-layout='button_count'
                                data-size='large'
                              >
                                <a
                                  // eslint-disable-next-line react/jsx-no-target-blank
                                  target='_blank'
                                  href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftriplehblog.vercel.app%2F&amp;src=sdkpreparse'
                                >
                                  <i className='fab fa-facebook-f' />
                                </a>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fab fa-twitter' />
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fab fa-linkedin-in' />
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fab fa-google-plus-g' />
                            </a>
                          </li>
                          <li>
                            <a href='#!'>
                              <i className='fab fa-pinterest' />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className='recipe-reviews'>
                    <div className='section-heading3 heading-dark'>
                      <h2 className='item-heading'>BÌNH LUẬN</h2>
                    </div>
                    <ul>
                      {comments.map((value, key) => {
                        return (
                          <li className='reviews-single-item' key={key}>
                            <div className='media media-none--xs'>
                              <img
                                src='../assets/img/blog/comment2.jpg'
                                alt='Avatar'
                                className='media-img-auto'
                              />
                              <div className='media-body'>
                                <h4 className='comment-title'>
                                  {value.user.name}
                                </h4>
                                <span className='post-date'>
                                  {formatTime(value.createdAt)}
                                </span>
                                <p>{value.content}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className='leave-review'>
                    <div className='section-heading3 heading-dark'>
                      <h2 className='item-heading'>ĐỂ LẠI BÌNH LUẬN</h2>
                    </div>
                    <form
                      className='leave-form-box'
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className='row'>
                        <div className='col-12 form-group'>
                          <label>Bình luận :</label>
                          <textarea
                            className='textarea form-control'
                            id='comment'
                            name='comment'
                            rows={7}
                            cols={20}
                            defaultValue={''}
                            ref={register({
                              required: 'Bình luận không được để trống.',
                            })}
                          />
                          {errors.comment &&
                            errorMessage(errors.comment.message)}
                        </div>
                        <div className='col-12 form-group mb-0'>
                          <input
                            type='submit'
                            className='item-btn'
                            value={loading ? 'Loading...' : 'ĐĂNG BÌNH LUẬN'}
                            disabled={loading}
                          />
                          {error && (
                            <>
                              <span className='error mt-3 d-block'>
                                {error}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className='form-response' />
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 sidebar-widget-area sidebar-break-md'>
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>BÀI VIẾT MỚI NHẤT</h3>
                  </div>
                  <div className='widget-blog-post'>
                    <ul className='block-list'>
                      {latestPosts.map((value, key) => {
                        return (
                          <li className='single-item' key={key}>
                            <div className='item-img'>
                              <Link to={'/' + value.nameUrl}>
                                <img
                                  className='img-side-bar'
                                  src={value.img}
                                  alt={value.title}
                                  onClick={(event) => {
                                    getOtherPost(value.nameUrl);
                                  }}
                                />
                              </Link>
                            </div>
                            <div className='item-content'>
                              <div className='item-post-date'>
                                <a href='#!' className='text-uppercase'>
                                  {value.category}
                                </a>
                              </div>
                              <h4 className='item-title'>
                                <Link
                                  to={'/' + value.nameUrl}
                                  onClick={(event) => {
                                    getOtherPost(value.nameUrl);
                                  }}
                                >
                                  {value.title}
                                </Link>
                              </h4>
                              <div className='item-post-by'>
                                <a href='#!'>
                                  <i className='fas fa-clock' />
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
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>SUBSCRIBE &amp; FOLLOW</h3>
                  </div>
                  <div className='widget-follow-us'>
                    <ul>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-facebook-f' />
                          Follow
                        </a>
                      </li>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-twitter' />
                          Follow
                        </a>
                      </li>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-linkedin-in' />
                          Follow
                        </a>
                      </li>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-pinterest-p' />
                          Follow
                        </a>
                      </li>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-instagram' />
                          Follow
                        </a>
                      </li>
                      <li className='single-item'>
                        <a href='#!'>
                          <i className='fab fa-youtube' />
                          Subscribe
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <div className='widget-ad'>
                    <a href='#!'>
                      <img
                        src='../assets/img/figure/figure6.jpg'
                        alt='Ad'
                        className='img-fluid'
                      />
                    </a>
                  </div>
                </div>
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>THỂ LOẠI</h3>
                  </div>
                  <div className='widget-categories'>
                    <ul>
                      {categories.map((value, key) => {
                        return (
                          <li key={key}>
                            <Link to={'/the-loai/' + value.nameUrl}>
                              {value.name}
                              <span>25</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <div className='widget-newsletter-subscribe'>
                    <h3>NHẬN CẬP NHẬT MỚI NHẤT</h3>
                    <p>Đăng ký bản tin</p>
                    <form className='newsletter-subscribe-form'>
                      <div className='form-group'>
                        <input
                          type='text'
                          placeholder='Email của bạn'
                          className='form-control'
                          name='email'
                          required
                        />
                        <div className='help-block with-errors' />
                      </div>
                      <div className='form-group mb-none'>
                        <button type='submit' className='item-btn'>
                          SUBSCRIBE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>BÀI VIẾT NỔI BẬT</h3>
                  </div>
                  <div className='widget-featured-feed'>
                    <Slider {...settings}>
                      {trendingPosts.map((value, key) => {
                        return (
                          <div className='featured-box-layout1' key={key}>
                            <div className='item-img'>
                              <img
                                src={value.img}
                                alt={value.title}
                                className='img-fluid'
                              />
                            </div>
                            <div className='item-content'>
                              <span className='ctg-name text-uppercase'></span>
                              <h4 className='item-title'>
                                <Link to={'/' + value.nameUrl}>
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
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>INSTAGRAM</h3>
                  </div>
                  <div className='widget-instagram'>
                    <ul>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure9.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure10.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure11.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure12.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure13.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure14.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure15.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure16.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className='item-box'>
                          <img
                            src='../assets/img/social-figure/social-figure17.jpg'
                            alt='Social Figure'
                            className='img-fluid'
                          />
                          <a href='#!' className='item-icon'>
                            <i className='fab fa-instagram' />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <div className='section-heading heading-dark'>
                    <h3 className='item-heading'>TAG PHỔ BIẾN</h3>
                  </div>
                  <div className='widget-tag'>
                    <ul>
                      <li>
                        <a href='#!'>DESERT</a>
                      </li>
                      <li>
                        <a href='#!'>CAKE</a>
                      </li>
                      <li>
                        <a href='#!'>BREAKFAST</a>
                      </li>
                      <li>
                        <a href='#!'>BURGER</a>
                      </li>
                      <li>
                        <a href='#!'>DINNER</a>
                      </li>
                      <li>
                        <a href='#!'>PIZZA</a>
                      </li>
                      <li>
                        <a href='#!'>SEA FOOD</a>
                      </li>
                      <li>
                        <a href='#!'>SALAD</a>
                      </li>
                      <li>
                        <a href='#!'>JUICE</a>
                      </li>
                    </ul>
                  </div>
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
