import React, { useState, useEffect, useRef } from "react";
import NavBarApp from "../components/NavBarApp";
import Slider from "../components/Slider";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

import { Player } from "@lordicon/react";
import plant from "../wired-outline-1827-growing-plant.json";
import star from "../wired-outline-237-star-rating.json";
import chart from "../wired-outline-153-bar-chart.json";
import truck from "../wired-outline-497-truck-delivery.json";

function Home() {
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <>
      <Slider />
      <NavBarApp handleShowCart={handleShowCart} />
      <Cart show={showCart} handleClose={handleCloseCart} />
      <header>
        <div
          className="d-flex align-items-center position-relative"
          id="header-image"
        >
          <div className="ms-5 fw-bold">
            <h1 className="banner-title mb-4">
              Your <span className="banner-font">healthy life</span> starts here
            </h1>
            <button class="cta">
              <span class="hover-underline-animation"> Shop now </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
          <div className="position-absolute" id="curva"></div>
        </div>
        <div className="d-flex text-center container justify-content-around div-curva text-dark mt-5">
          <div className="d-flex flex-column align-items-center">
            <Player ref={playerRef} size={96} icon={star} trigger="hover" />
            <h5>We are Premium</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={playerRef} size={96} icon={plant} trigger="hover" />
            <h5>We are Natural</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={playerRef} size={96} icon={chart} trigger="hover" />
            <h5>We are efficients</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={playerRef} size={96} icon={truck} trigger="hover" />
            <h5>We are top</h5>
            <p>We offer the best products with quality controls</p>
          </div>
        </div>
      </header>
      <section className="container" id="category">
        <div className="text-center my-5 row">
          <div className="col">
            <h3>FIND YOUR HEALTHY</h3>
            <p>Shop by category</p>
          </div>
          <div className="row g-3 ms-auto justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/granola.png"
                alt="bowl of granola"
              />
              <h5>Nuts, cereals and seeds</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/jar-of-honey.png"
                alt="jar of honey"
              />
              <h5>Sugars and substitutes</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/dairy-product.png"
                alt="bottle of milk"
              />
              <h5>Dairy, plant based milk</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img className="category-image" src="/spices.png" alt="spices" />
              <h5>Pantry & spices</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/açaí-fruit.png"
                alt="açaí fruit"
              />
              <h5>Superfoods</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/coffee.png"
                alt="iced coffee"
              />
              <h5>Beverages</h5>
            </div>
            <div className="col-6 col-sm-4 col-md-3 p-3 category-item">
              <img
                className="category-image"
                src="/potato-chips.png"
                alt="bowl of potato chips"
              />
              <h5>Snacks</h5>
            </div>
          </div>
        </div>
      </section>
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
