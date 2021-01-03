import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="section-heading heading-dark">
        <h3 className="item-heading">VỀ CHÚNG TÔI</h3>
      </div>
      <div className="widget-about">
        <figure className="author-figure">
          <img src="../assets/img/figure/about.jpg" alt="about" />
        </figure>
        <figure className="author-signature">
          <h3>Three Heroes</h3>
        </figure>
        <p>
          Chúng tôi là những sinh viên thuộc lớp MMTT2017, khoa Mạng máy tính
          &#38; Truyền thông, trường Đại học Công nghệ Thông tin - Đại học Quốc
          gia Thành phố Hồ Chí Minh.
        </p>
        <p>From UIT with love.</p>
      </div>
    </div>
  );
}

export default AboutUs;
