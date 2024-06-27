import React from "react";
import NavBarApp from "../components/NavBarApp";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Slider />
      <NavBarApp />
      <header>
        <div
          className="d-flex align-items-center position-relative"
          id="header-image"
        >
          <div className="ms-5 fw-bold">
            <h2>Healthiness Starts Here</h2>
            <p>Granola , breakfast bowls </p>
            <a className="btn btn-dark rounded">Shop Now</a>
          </div>
          <div className="position-absolute" id="curva"></div>
        </div>
        <div className="d-flex text-center div-curva text-dark">
          <div>
            <img></img>
            <h5>We are Premium</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div>
            <img></img>
            <h5>We are Natural</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div>
            <img></img>
            <h5>We are efficients</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div>
            <img></img>
            <h5>We are top</h5>
            <p>We offer the best products with quality controls</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
