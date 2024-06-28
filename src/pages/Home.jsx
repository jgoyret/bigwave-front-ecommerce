import React from "react";
import NavBarApp from "../components/NavBarApp";
import Slider from "../components/Slider";
import Carousel from "react-bootstrap/Carousel";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

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
        <div className="d-flex text-center justify-content-around div-curva text-dark">
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
      <section id="category">
        <div className="text-center">
          <h3>FIND YOUR HEALTHY</h3>
          <p>kmcdkkd</p>
          <div className="d-flex justify-content-evenly">
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Gluten-Free-1.png"
                alt=""
              />
              <h5>Nuts, cereals and seeds</h5>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Organic-1.png"
                alt=""
              />
              <h5>Sugars and substitutes</h5>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Plant-Based-1.png"
                alt=""
              />
              <h5>Dairy, plant based milk</h5>
            </div>
            <div className="category-item">
              <img
                src="https://www.sprouts.com/wp-content/uploads/2022/10/Attribute-Keto-1.png"
                alt=""
              />
              <h5>Pantry & spices</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-5 text-center" id="combos">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 mb-3">
            <h4>Pick your combo</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-md-8">
            <Carousel>
              <Carousel.Item>
                <img
                  src="/jugo-removebg-preview.png"
                  alt="Jugo"
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/jugo-removebg-preview.png"
                  alt="Snack"
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/snack-removebg-preview.png"
                  alt="Combo"
                  className="d-block w-100 rounded shadow"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
