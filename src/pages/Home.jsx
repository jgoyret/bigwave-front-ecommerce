import React from "react";
import NavBarApp from "../components/NavBarApp";
import Slider from "../components/Slider";
import Carousel from "react-bootstrap/Carousel";

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
      <section
        className="container d-flex mt-5 bg-secondary justify-content-center"
        id="combos"
      >
        <div className="me-5">
          <h4>Pick your combo</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Carousel className="ms-5" fade>
            <Carousel.Item>
              <img
                src="https://quieronatural.uy/wp-content/uploads/2024/05/jugo.jpg"
                alt="..."
                text="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://quieronatural.uy/wp-content/uploads/2024/05/snack.jpg"
                alt="..."
                text="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://quieronatural.uy/wp-content/uploads/2024/05/ferche_2024_imagene_para_tienda_online_de_combo_de_venta_nombre_0a84e35f-c0b4-4452-ad1b-ce00c4fdd63e-430x430.png"
                alt="..."
                text="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Home;
