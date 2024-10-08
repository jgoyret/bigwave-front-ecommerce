import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadcrumbApp from "../components/BreadcrumbApp";
import "../styles/productview.css";
import { useDispatch, useSelector } from "react-redux";
import { checkAndAddToCart } from "../redux/cartReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuggestedItems from "../components/SuggestedItems"; // Import the new component
import { Form } from "react-bootstrap";

function ProductView() {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const [units, setUnits] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (units <= 0) {
      toast.info("Units must be higher than 0");
    } else {
      const entrieProduct = { ...product, quantity: units };
      dispatch(checkAndAddToCart(entrieProduct));
      setUnits(1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/products/${params.slug}`,
          method: "get",
        });
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [params.slug]);

  const handleDecreaseUnits = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  };

  const handleIncreaseUnits = () => {
    product.stock > units
      ? setUnits(units + 1)
      : toast.info("No more stock available");
  };
  return (
    product && (
      <>
        <div className="container container-productview">
          <div className="row container container-view">
            <div className="col-md-10 col-lg-5 mt-3 p-0 container-img">
              <img
                style={{ width: 500, height: 500 }}
                className="img-fluid rounded shadow object-fit-cover product-image"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="col-md-10 col-lg-7 p-0 ms-4 product-body">
              <BreadcrumbApp product={product} />
              <section>
                <h3 className="fs-4 fw-bold mb-4">
                  {product.name} <i className="bi bi-suit-heart ms-3 fs-5"></i>
                </h3>
                <p className="fs-6">Quantity: {product.netWeight}</p>
                <p className="fs-5">{product.price} USD</p>
                {/* <Form.Select size="sm" className="bg-transparent custom">
                  <option>Quantity</option>
                  <option value="1">{"250g"}</option>
                  <option value="2">{"500g"}</option>
                  <option value="3">{"1kg"}</option>
                </Form.Select> */}
                <p className="fs-6 fw-light mt-3">{product.description}</p>
                <div className="d-flex align-items-center">
                  <div className="fs-5">
                    <i
                      className="bi bi-dash-circle fs-6"
                      onClick={handleDecreaseUnits}
                    ></i>
                    <span className="ms-2 user-select-none">{units}</span>
                    <i
                      className="ms-2 bi bi-plus-circle fs-6"
                      onClick={handleIncreaseUnits}
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
                </div>
              </section>
              <section className="d-flex section-div mt-2">
                <div className="w-25 text-center section-card shadow rounded mt-5">
                  <i className="bi bi-truck fs-5"></i>
                  <p>Free Shipping</p>
                  <p>On orders $50+</p>
                </div>
                <div className="ms-5 w-25 text-center section-card shadow rounded mt-5 ">
                  <i className="bi bi-shield-check"></i>
                  <p>Quality Assurance</p>
                  <p>Return within 30 days</p>
                </div>
                <div className="ms-5 w-25 text-center shadow section-card rounded mt-5 ">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <p>Customer Satisfaction</p>
                  <p>24/7 Support</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <SuggestedItems
          categoryId={product.Category.id}
          currentProductSlug={product.slug}
          products={product.Category.Products}
        />
      </>
    )
  );
}

export default ProductView;
