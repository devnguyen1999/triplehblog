import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer Area Start Here */}

      <footer className="ranna-bg-dark">
        <div className="container">
          <div className="footer-logo">
            <a href="index.html">
              <img
                src="../assets/img/logo-light.png"
                className="img-fluid"
                alt="footer-logo"
              />
            </a>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#!">FACEBOOK</a>
              </li>
              <li>
                <a href="#!">TWITTER</a>
              </li>
              <li>
                <a href="#!">INSTAGRAM</a>
              </li>
              <li>
                <a href="#!">PINTEREST</a>
              </li>
              <li>
                <a href="#!">GOOGLEPLUS</a>
              </li>
              <li>
                <a href="#!">YOUTUBE</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer Area End Here */}
    </div>
  );
}

export default Footer;
