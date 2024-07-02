import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="mt-5 bg-dark text-white">
        <div className="d-flex align-items-center position-relative">
          <div className="position-absolute" id="curva-footer"></div>
        </div>

        <div className="d-flex container">
          <div className="w-25">
            <h5>Company</h5>
            <ul className="list-group">
              <li className="li-footer mb-3">
                <a href="/about-this-project">Who we are</a>
              </li>
              <li className="li-footer mb-3">
                <a href="/about-this-project">Terms & Conditions</a>
              </li>
              <li className="li-footer">
                <a href="/about-this-project">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-evenly w-100">
            <div className="">
              <h5>Account</h5>
              <div>
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
            </div>
            <div>
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
          </div>

          <div className="d-flex flex-column w-50 justify-content-center">
            <h5>SUBSCRIBE TO OUR MAILING LIST</h5>
            <form className="form-inline">
              <div className="d-flex">
                <input className="form-control" style={{ flex: "1" }}></input>
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="d-flex container justify-content-between">
          <div>
            <span className="copy-color">Copyright © 2024 Hack Academy.</span>
          </div>
          <div>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook ms-3"></i>
            <i className="bi bi-tiktok ms-3"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
