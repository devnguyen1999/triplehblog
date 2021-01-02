import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link } from "react-router-dom";

function FeaturedPosts() {
    function Arrow() {
        return <span className='d-none'></span>;
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
        prevArrow: <Arrow />,
        nextArrow: <Arrow />,
      };
    const [featuredPosts, setFeaturedPosts] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: ApiBaseURL("post/loadMostViews"),
          })
            .then((response) => {
                setFeaturedPosts(response.data.data);
            })
            .catch((error) => {
            });
      }, []);
  return (
    <div>
      <div className="section-heading heading-dark">
        <h3 className="item-heading">BÀI VIẾT NỔI BẬT</h3>
      </div>
      <div className="widget-featured-feed">
        <Slider {...settings}>
          {featuredPosts.map((value, key) => {
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
                    <Link to={"/" + value.nameUrl}>{value.title}</Link>
                  </h4>
                  <p>{value.summary}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedPosts;
