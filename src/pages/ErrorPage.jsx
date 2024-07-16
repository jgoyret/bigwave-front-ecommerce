import React from "react";
import { Link } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";
import Footer from "../components/Footer";
import "../styles/error-page.css";

function ErrorPage() {
  return (
    <>
      <NavBarApp />
      <div className="container error-container">
        <div className="row">
          <div className="col col-6">
            <h1 className="error-title">Error 404</h1>
            <h2>Sorry, it seems that this page does not exist</h2>
            <h2 className="mb-5"> (ㆆ_ㆆ)</h2>

            <Link to="/" className="btn btn-checkout-cart py-2 w-25">
              Back home
            </Link>
          </div>
          <div className="col col-6">
            <img className="img-fluid" src="/hamburguer.webp" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
