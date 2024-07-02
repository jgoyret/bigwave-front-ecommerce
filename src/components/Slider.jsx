import React from "react";
import "../styles/slider.css";

function Slider() {
  return (
    <>
      <div className="slider bg-dark">
        <div className="container-fluid slider-animation d-flex w-100">
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <a href="">Subscribe & Save</a>
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <a href="">Subscribe & Save</a>{" "}
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <a href="">Subscribe & Save</a>{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Slider;
