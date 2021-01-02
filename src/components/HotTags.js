import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { ApiBaseURL } from '../ApiBaseURL';
import { Link } from 'react-router-dom';
const HotTags = () => {
  const [tagsPost, setTagsPost] = useState([]);
  useEffect(() => {
    axios.get(ApiBaseURL('tag')).then((response) => {
      setTagsPost(response.data.data);
    });
  }, []);
  return (
    <div>
      <div className='section-heading heading-dark'>
        <h3 className='item-heading'>TAG PHỔ BIẾN</h3>
      </div>
      <div className='widget-tag'>
        <ul>
          {tagsPost &&
            // eslint-disable-next-line array-callback-return
            tagsPost.slice(0, 10).map((tag, key) => {
              if (tag !== null && tag !== 'undefined' && tag !== undefined)
                return (
                  <li key={key}>
                    <a href='#!'>{tag}</a>
                  </li>
                );
            })}
        </ul>
      </div>
    </div>
  );
};

export default HotTags;
