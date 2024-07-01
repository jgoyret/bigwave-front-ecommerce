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
        <div className="container mt-5 d-flex">
          <div>
            <img
              className="rounded shadow object-fit-cover"
              style={{ width: 500, height: 700 }}
              src={product.image}
            />
          </div>
          <div className="ms-4">
            <BreadcrumbApp product={product} />
            <h3 className="fs-1 fw-bold">{product.name}</h3>
            <p className="fs-2">$ {product.price}</p>
            <p className="fs-3">{product.description}</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </>
    )
  );
}

export default ProductView;
