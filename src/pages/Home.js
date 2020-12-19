import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Header />
      {/* Slider Area Start Here */}
      <section className="ranna-slider-area">
        <div className="container">
          <Slider {...settings} className="rc-carousel nav-control-layout2">
            <div className="ranna-slider-content-layout1">
              <figure className="item-figure">
                <a href="single-recipe1.html">
                  <img
                    src="../assets/img/slider/slide1-1.jpg"
                    alt="Product"
                  />
                </a>
              </figure>
              <div className="item-content">
                <span className="sub-title">SALAD</span>
                <h2 className="item-title">
                  <a href="single-recipe1.html">Italiano Salad Mixed</a>
                </h2>
                <ul className="item-rating">
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-empty">
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <span>
                      9<span> / 10</span>
                    </span>
                  </li>
                </ul>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa outside crud mightily rigorouse.
                </p>
                <ul className="entry-meta">
                  <li>
                    <a href="!#">
                      <i className="fas fa-clock" />
                      15 Mins
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-user" />
                      by <span>John Martin</span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-heart" />
                      <span>02</span> Likes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ranna-slider-content-layout1">
              <figure className="item-figure">
                <a href="single-recipe1.html">
                  <img
                    src="../assets/img/slider/slide1-2.jpg"
                    alt="Product"
                  />
                </a>
              </figure>
              <div className="item-content">
                <span className="sub-title">SALAD</span>
                <h2 className="item-title">
                  <a href="single-recipe1.html">Italiano Salad Mixed</a>
                </h2>
                <ul className="item-rating">
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-empty">
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <span>
                      9<span> / 10</span>
                    </span>
                  </li>
                </ul>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa outside crud mightily rigorouse.
                </p>
                <ul className="entry-meta">
                  <li>
                    <a href="!#">
                      <i className="fas fa-clock" />
                      15 Mins
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-user" />
                      by <span>John Martin</span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-heart" />
                      <span>02</span> Likes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ranna-slider-content-layout1">
              <figure className="item-figure">
                <a href="single-recipe1.html">
                  <img
                    src="../assets/img/slider/slide1-3.jpg"
                    alt="Product"
                  />
                </a>
              </figure>
              <div className="item-content">
                <span className="sub-title">SALAD</span>
                <h2 className="item-title">
                  <a href="single-recipe1.html">Italiano Salad Mixed</a>
                </h2>
                <ul className="item-rating">
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-fill">
                    <i className="fas fa-star" />
                  </li>
                  <li className="star-empty">
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <span>
                      9<span> / 10</span>
                    </span>
                  </li>
                </ul>
                <p>
                  More off this less hello salamander lied porpoise much over
                  tightly circa outside crud mightily rigorouse.
                </p>
                <ul className="entry-meta">
                  <li>
                    <a href="!#">
                      <i className="fas fa-clock" />
                      15 Mins
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-user" />
                      by <span>John Martin</span>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <i className="fas fa-heart" />
                      <span>02</span> Likes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Slider Area End Here */}
      {/* Random Recipe Start Here */}
      <section className="padding-bottom-18">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img
                      src="../assets/img/product/product1.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">BREAKFAST</span>
                  <h3 className="item-title">
                    <a href="single-recipe1.html">
                      Tomatoes Stuffed with Foie and Chanterelles
                    </a>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      <a href="!#">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="fas fa-user" />
                        by <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="fas fa-heart" />
                        <span>02</span> Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="product-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img
                      src="../assets/img/product/product2.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">DESERT</span>
                  <h3 className="item-title">
                    <a href="single-recipe1.html">
                      Pumpkin Cheesecake With GingersnapCrust
                    </a>
                  </h3>
                  <ul className="entry-meta">
                    <li>
                      <a href="!#">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="fas fa-user" />
                        by <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="fas fa-heart" />
                        <span>02</span> Likes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-block d-md-none d-lg-block col-sm-12">
              <div className="product-box-layout1">
                <figure className="item-figure">
                  <a href="single-recipe1.html">
                    <img
                      src="../assets/img/product/product3.jpg"
                      alt="Product"
                    />
                  </a>
                </figure>
                <div className="item-content">
                  <span className="sub-title">JUICE</span>
                  <h3 className="item-title">
                    <a href="single-recipe1.html">
                      Blueberry Juice with Lemon Crema
                    </a>
                  </h3>

                  <ul className="entry-meta">
                    <li>
                      <a href="!#">
                        <i className="fas fa-clock" />
                        15 Mins
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="fas fa-user" />
                        by <span>John Martin</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
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
      {/* Random Recipe End Here */}
      {/* Trending Recipe Start Here */}
      <section className="padding-bottom-45">
        <div className="container">
          <div className="row gutters-60">
            <div className="col-lg-8">
              <div className="section-heading heading-dark">
                <h2 className="item-heading">TRENDING RECIPES</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="product-box-layout1">
                    <figure className="item-figure">
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product4.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">PASTA</span>
                      <h2 className="item-title">
                        <a href="single-recipe1.html">
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
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product5.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">CHICKEN</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product6.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">SALAD</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Italiano Salad Mixed</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product7.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">DINNER</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Maxican Dessert</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product8.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">JUICE</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Soypan Fruits Juice</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product9.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">BREAKFAST</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Crepes with Forest</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                      <a href="single-recipe1.html">
                        <img
                          src="../assets/img/product/product10.jpg"
                          alt="Product"
                        />
                      </a>
                    </figure>
                    <div className="item-content">
                      <span className="sub-title">DINNER</span>
                      <h3 className="item-title">
                        <a href="single-recipe1.html">Asian Chicken Noodles</a>
                      </h3>
                      <p>
                        More off this less hello salamander lied porpoise much
                        over tightly circa outside crud mightily rigorouse.{" "}
                      </p>
                      <ul className="entry-meta">
                        <li>
                          <a href="!#">
                            <i className="fas fa-clock" />
                            15 Mins
                          </a>
                        </li>
                        <li>
                          <a href="!#">
                            <i className="fas fa-user" />
                            by <span>John Martin</span>
                          </a>
                        </li>
                        <li>
                          <a href="!#">
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
                  <h3 className="item-heading">ABOUT ME</h3>
                </div>
                <div className="widget-about">
                  <figure className="author-figure">
                    <img
                      src="../assets/img/figure/about.jpg"
                      alt="about"
                    />
                  </figure>
                  <figure className="author-signature">
                    <img
                      src="../assets/img/figure/signature.png"
                      alt="about"
                    />
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
                      <a href="!#">
                        <i className="fab fa-facebook-f" />
                        LIKE ME ON
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="!#">
                        <i className="fab fa-twitter" />
                        LIKE ME
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="!#">
                        <i className="fab fa-linkedin-in" />
                        LIKE ME
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="!#">
                        <i className="fab fa-pinterest-p" />
                        LIKE ME
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="!#">
                        <i className="fab fa-instagram" />
                        LIKE ME
                      </a>
                    </li>
                    <li className="single-item">
                      <a href="!#">
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
                        <a href="!#">
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
                          <a href="!#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span>
                            John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="!#">
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
                          <a href="!#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span>
                            John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="!#">
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
                          <a href="!#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span>
                            John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="!#">
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
                          <a href="!#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span>
                            John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="single-item">
                      <div className="item-img">
                        <a href="!#">
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
                          <a href="!#">
                            Salami Oven Roasted are Mozzarella Oelette
                          </a>
                        </h4>
                        <div className="item-post-by">
                          <a href="single-blog.html">
                            <i className="fas fa-user" />
                            <span>by</span>
                            John Martin
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-ad">
                  <a href="!#">
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
                  <h3 className="item-heading">CATEGORIES</h3>
                </div>
                <div className="widget-categories">
                  <ul>
                    <li>
                      <a href="!#">
                        BreakFast
                        <span>25</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Lunch
                        <span>15</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Pasta
                        <span>22</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Dinner
                        <span>18</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Dessert
                        <span>36</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        Drinks
                        <span>12</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-newsletter-subscribe">
                  <h3>GET LATEST UPDATES</h3>
                  <p>Newsletter Subscribe</p>
                  <form className="newsletter-subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="your e-mail address"
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
      <Footer />
    </div>
  );
}

export default Home;
