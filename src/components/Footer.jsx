import React from "react";
import "../styles/footer.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  return (
    <>
      <ToastContainer />
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
                  <a href="/about-this-project">About us</a>
                </li>
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Terms & Conditions</a>
                </li>
                <li className="li-footer">
                  <a href="/about-this-project">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h5>Account</h5>
              <ul className="list-group">
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Manage Account</a>
                </li>
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Returns & Exchanges</a>
                </li>
                <li className="li-footer">
                  <a href="/about-this-project">Redeem a Gift Card</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h5>Connect</h5>
              <ul className="list-group mt-2">
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Contact Us</a>
                </li>
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Twitter</a>
                </li>
                <li className="li-footer mb-3">
                  <a href="/about-this-project">Instagram</a>
                </li>
                <li className="li-footer">
                  <a href="/about-this-project">Pinterest</a>
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
