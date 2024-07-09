import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import ProductModel from "../components/ProductModel";
import axios from "axios";
import "../styles/Products.css";
import ProductsNavbar from "./ProductsNavbar";
import Footer from "../components/Footer";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "get",
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <NavBarApp />
      <div className="container">
        <header>
          <div
            className="d-flex category-header justify-content-center align-items-center position-relative "
            id="header-image"
          >
            <div className="ms-5 text-center fw-bold">
              <h2 className="text-capitalize">All products</h2>
            </div>
          </div>
        </header>
      </div>
      <div className="d-flex justify-content-center container-main-products">
        <ProductsNavbar />
        <div>
          {products && (
            <div className="products-container container mt-4 justify-content-center">
              {products.map((product) => {
                return <ProductModel key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
