import React, { useState, useEffect, useRef } from "react";
import Slider from "../components/Slider";
import Questions from "../components/Questions";
import { Player } from "@lordicon/react";
import plant from "../icons/wired-outline-1827-growing-plant.json";
import star from "../icons/wired-outline-237-star-rating.json";
import chart from "../icons/wired-outline-153-bar-chart.json";
import truck from "../icons/wired-outline-497-truck-delivery.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [categories, setCategories] = useState([]);

  const starRef = useRef(null);
  const plantRef = useRef(null);
  const chartRef = useRef(null);
  const truckRef = useRef(null);

  useEffect(() => {
    // starRef.current?.play();
    // plantRef.current?.play();
    // chartRef.current?.play();
    // truckRef.current?.play();

    //llamada para obtener las categorias
    const getCategories = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/categories`,
        method: "get",
      });
      setCategories(response.data);
    };

    getCategories();
  }, []);

  const handleAnimationIcon = (iconRef) => {
    iconRef.current?.playFromBeginning();
  };

  return (
    <>
      <Slider />
      <header>
        <div
          className="d-flex align-items-center position-relative "
          id="header-image"
        >
          <div className="ms-5 fw-bold">
            <h1 className="banner-title mb-4">
              Your <span className="banner-font">healthy life</span> starts here
            </h1>
            <Link to={"/products"} className="cta">
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
            </Link>
          </div>
          <div className="position-absolute" id="curva"></div>
        </div>
        <div className="d-flex text-center container justify-content-around div-curva text-dark mt-5">
          <div
            className="d-flex flex-column align-items-center"
            onMouseEnter={() => handleAnimationIcon(starRef)}
          >
            <Player
              ref={starRef}
              loading="interaction"
              size={96}
              icon={star}
              trigger="hover"
            />
            <h5>We are premium</h5>
            <p className=" d-none d-md-inline">
              Premium quality products with excelent controls
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            onMouseEnter={() => handleAnimationIcon(plantRef)}
          >
            <Player ref={plantRef} size={96} icon={plant} trigger="hover" />
            <h5>We are natural</h5>
            <p className=" d-none d-md-inline">
              100% natural ingredients for a healthier lifestyle
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            onMouseEnter={() => handleAnimationIcon(chartRef)}
          >
            <Player ref={chartRef} size={96} icon={chart} trigger="hover" />
            <h5>We are efficient</h5>
            <p className=" d-none d-md-inline">
              Efficient and reliable service for your needs
            </p>
          </div>
          <div
            className="d-flex flex-column align-items-center"
            onMouseEnter={() => handleAnimationIcon(truckRef)}
          >
            <Player ref={truckRef} size={96} icon={truck} trigger="hover" />
            <h5>We are fast</h5>
            <p className=" d-none d-md-inline">
              Fast and secure delivery to your doorstep
            </p>
          </div>
        </div>
      </header>
      <section className="container" id="category-healthy">
        <div className="text-center my-5">
          <div>
            <h3 className="">ENHANCE YOUR VITALITY</h3>
            <p>Shop by category</p>
          </div>
          <div className="row px-0 mx-0 d-flex justify-content-center g-3">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 category-item"
                >
                  <Link to={`/categories/${category.slug}`}>
                    <img
                      className="category-image"
                      src={category.thumbnail}
                      alt={category.name}
                    />
                    <p>{category.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Questions />
    </>
  );
}

export default Home;
