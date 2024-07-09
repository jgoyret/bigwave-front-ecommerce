import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadcrumbApp from "../components/BreadcrumbApp";
import Footer from "../components/Footer";
import "../styles/productview.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductView() {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const [units, setUnits] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (units <= 0) {
      toast.info("Units must be higher than 1");
    } else {
      dispatch(addToCart({ ...product, quantity: units }));
      toast.success("Product added to the cart");
      setUnits(1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products/${params.slug}`,
        method: "get",
      });
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    product && (
      <>
        <NavBarApp />
        <div className="container container-productview">
          <div className="row container">
            <div className="col-md-10 col-lg-5 mt-3 p-0 container-img">
              <img
                style={{ width: 500, height: 500 }}
                className="img-fluid rounded shadow object-fit-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="col-md-10 col-lg-7 p-0 ms-4">
              <BreadcrumbApp product={product} />
              <section>
                <h3 className="fs-1 fw-bold">{product.name}</h3>
                <p className="fs-2">$ {product.price}</p>
                <p className="fs-4 fw-light">{product.description}</p>
                <div className="d-flex align-items-center">
                  <div className="fs-4">
                    <i
                      className="bi bi-dash-circle"
                      onClick={() => setUnits(units - 1)}
                    ></i>
                    <span className="ms-2 user-select-none">{units}</span>
                    <i
                      className="ms-2 bi bi-plus-circle"
                      onClick={() => setUnits(units + 1)}
                    ></i>
                  </div>
                  <button
                    className="ms-4 w-50 button-add type1"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-cart2"></i>
                    <span className="btn-txt ms-3 user-select-none">
                      Add to cart
                    </span>
                  </button>
                  <i className="bi bi-suit-heart ms-3 fs-3"></i>
                </div>
              </section>
              <section className="d-flex section-div mt-2">
                <div className="w-25 text-center section-card shadow rounded mt-5">
                  <i className="bi bi-truck fs-5"></i>
                  <p>Free Shipping</p>
                  <p>On orders $50+</p>
                </div>
                <div className="ms-5 w-25 text-center section-card shadow rounded mt-5">
                  <i className="bi bi-shield-check"></i>
                  <p>Quality Assurance</p>
                  <p>Return within 30 days</p>
                </div>
                <div className="ms-5 w-25 text-center shadow section-card rounded mt-5">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <p>Customer Satisfaction</p>
                  <p>24/7 Support</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default ProductView;
