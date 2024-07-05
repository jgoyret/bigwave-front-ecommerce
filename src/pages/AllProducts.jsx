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
