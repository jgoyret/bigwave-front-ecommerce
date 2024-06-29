import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);
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
    <>
      <NavBarApp />
      <div className="container mt-5 d-flex">
        <div>
          <img
            className="rounded"
            style={{ width: 500, height: 700 }}
            src="https://previews.123rf.com/images/wirestock/wirestock2303/wirestock230302776/199480754-un-disparo-vertical-de-deliciosa-granola-vegana-saludable-con-nueces-pecanas-en-un-taz%C3%B3n-de-fruta.jpg"
          />
        </div>
        <div className="ms-4">
          <h3 className="fs-1 fw-bold">{product.name}</h3>
          <p className="fs-2">$ {product.price}</p>
          <p className="fs-3">{product.description}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
