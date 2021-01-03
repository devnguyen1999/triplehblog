import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link } from "react-router-dom";
const HotTags = () => {
  const [hotTags, setHotTags] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: ApiBaseURL("tag"),
    })
      .then((response) => {
        setHotTags(response.data.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <div className="section-heading heading-dark">
        <h3 className="item-heading">TAG PHỔ BIẾN</h3>
      </div>
      <div className="widget-tag">
        <ul>
          {hotTags &&
            // eslint-disable-next-line array-callback-return
            hotTags.slice(0, 10).map((tag, key) => {
              if (tag !== null && tag !== "undefined" && tag !== undefined)
                return (
                  <li key={key}>
                    <Link to={"/tag/" + encodeURIComponent(tag)}>{tag}</Link>
                  </li>
                );
            })}
        </ul>
      </div>
    </div>
  );
};

export default HotTags;
