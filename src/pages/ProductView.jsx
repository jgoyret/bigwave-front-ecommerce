import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadcrumbApp from "../components/BreadcrumbApp";

function ProductView() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        url: `http://localhost:3000/products/${params.slug}`,
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-10 col-lg-6">
              <img
                className="img-fluid rounded shadow object-fit-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="col-md-10 col-lg-6">
              <BreadcrumbApp product={product} />
              <h3 className="fs-1 fw-bold">{product.name}</h3>
              <p className="fs-2">$ {product.price}</p>
              <p className="fs-3 fw-light">{product.description}</p>
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-4">Add to cart</button>
                <i className="bi bi-suit-heart fs-3"></i>
              </div>
            </div>
          </div>
          <div className="border border-danger"></div>
        </div>
      </>
    )
  );
}

export default ProductView;
