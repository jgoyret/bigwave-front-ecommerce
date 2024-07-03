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
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [showCart, setShowCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const starRef = useRef(null);
  const plantRef = useRef(null);
  const chartRef = useRef(null);
  const truckRef = useRef(null);

  useEffect(() => {
    starRef.current?.playFromBeginning();
    plantRef.current?.playFromBeginning();
    chartRef.current?.playFromBeginning();
    truckRef.current?.playFromBeginning();

    //llamada para obtener las categorias
    const getCategories = async () => {
      const response = await axios({
        url: "http://localhost:3000/categories",
        method: "get",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <NavBarApp handleShowCart={handleShowCart} />
      <Slider />
      <Cart show={showCart} handleClose={handleCloseCart} />
      <header>
        <div
          className="d-flex align-items-center position-relative "
          id="header-image"
        >
          <div className="ms-5 fw-bold">
            <h1 className="banner-title mb-4">
              Your <span className="banner-font">healthy life</span> starts here
            </h1>
            <button className="cta">
              <span className="hover-underline-animation"> Shop now </span>
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
            <Player ref={starRef} size={96} icon={star} trigger="hover" />
            <h5>We are Premium</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={plantRef} size={96} icon={plant} trigger="hover" />
            <h5>We are Natural</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={chartRef} size={96} icon={chart} trigger="hover" />
            <h5>We are efficients</h5>
            <p>We offer the best products with quality controls</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <Player ref={truckRef} size={96} icon={truck} trigger="hover" />
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
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="col-6 col-sm-4 col-md-3 p-3 category-item"
                >
                  <Link to={`/categories/${category.slug}`}>
                    <img
                      className="category-image"
                      src={category.thumbnail}
                      alt={category.name}
                    />
                    <h5>{category.name}</h5>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
