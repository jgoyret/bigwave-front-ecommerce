import React from "react";
import "../styles/slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <>
      <div className="slider bg-dark">
        <div className="container-fluid slider-animation d-flex w-100">
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>{" "}
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>{" "}
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>{" "}
          </span>
          <span>Free Shipping on orders $50+</span>
          <span>
            Save up to 15% with <Link to="">Subscribe & Save</Link>{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Slider;
