import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
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
                    src="http://localhost:3000/sites/assets/images/figure/404.png"
                    alt={404}
                    className="img-fluid"
                  />
                  <div className="error-center-figure">
                    <img
                      src="http://localhost:3000/sites/assets/images/figure/404-middle.png"
                      alt={404}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <h2 className="item-title">Sorry! Page Was Not Found</h2>
                <p className="item-details">
                  The page you are looking is not available or has been removed.
                  Try going to Home Page by using the button below.
                </p>
                <a href="index.html" className="item-btn">
                  GO TO HOME PAGE
                </a>
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
