import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {document.title = "Không tìm thấy trang";}, []);
  return (
    <div>
      <Header />
      {/* Error Page Area Start Here */}
      <section className="error-page-wrap padding-top-80 padding-bottom-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content-box">
                <div className="error-figure-wrap">
                  <img
                    src="../assets/img/figure/404.png"
                    alt={404}
                    className="img-fluid"
                  />
                  <div className="error-center-figure">
                    <img
                      src="../assets/img/figure/404-middle.png"
                      alt={404}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <h2 className="item-title">Trang này không tồn tại</h2>
                <p className="item-details">
                  Trang bạn đang truy cập hiện không tìm thấy.
                </p>
                <Link to="/" className="item-btn">
                  ĐI ĐẾN TRANG CHỦ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error Page Area End Here */}
      <Footer />
    </div>
  );
}

export default NotFound;
