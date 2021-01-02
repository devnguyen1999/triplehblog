import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApiBaseURL } from "../ApiBaseURL";
import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: ApiBaseURL("category/load"),
          })
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
            });
      }, []);
    return (
        <div>
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
    )
}

export default Categories
