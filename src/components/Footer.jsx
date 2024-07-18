import React from "react";
import "../styles/footer.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-4">
        <div className="d-flex align-items-center position-relative">
          <div className="position-absolute" id="curva-footer"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <h5>Company</h5>
              <ul className="list-group">
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">About us</Link>
                </li>
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Terms & Conditions</Link>
                </li>
                <li className="li-footer">
                  <Link to="/about-this-project">Privacy</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h5>Account</h5>
              <ul className="list-group">
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Manage Account</Link>
                </li>
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Returns & Exchanges</Link>
                </li>
                <li className="li-footer">
                  <Link to="/about-this-project">Redeem a Gift Card</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h5>Connect</h5>
              <ul className="list-group mt-2">
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Contact Us</Link>
                </li>
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Twitter</Link>
                </li>
                <li className="li-footer mb-3">
                  <Link to="/about-this-project">Instagram</Link>
                </li>
                <li className="li-footer">
                  <Link to="/about-this-project">Pinterest</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h5>SUBSCRIBE TO OUR MAILING LIST</h5>
              <div className="input-container">
                <input
                  required
                  placeholder="Email Address"
                  type="email"
                ></input>
                <button
                  onClick={() => toast.info("This function is being developed")}
                  className="invite-btn"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-12 col-md-6 mb-2">
              <span className="copy-color">Copyright © 2024 Hack Academy.</span>
            </div>
            <div className="col-12 col-md-6 text-md-end mb-2">
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-tiktok"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
