import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { FormatTime } from '../helpers/FormatTime';
import { Link } from "react-router-dom";

function LatestPosts() {
    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: ApiBaseURL("post/loadLatest"),
          })
            .then((response) => {
                setLatestPosts(response.data.data);
            })
            .catch((error) => {
            });
      }, []);
  return (
    <div>
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
                    <Link to={"/" + value.nameUrl}>{value.title}</Link>
                  </h4>
                  <div className="item-post-by">
                    <a href="#!">
                      <i className="fas fa-clock" />
                      {FormatTime(value.createdAt)}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LatestPosts;
