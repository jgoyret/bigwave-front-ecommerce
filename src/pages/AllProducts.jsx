import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import ProductModel from "../components/ProductModel";
import axios from "axios";
import "../styles/Products.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: "http://localhost:3000/products",
        method: "get",
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <NavBarApp />
      <h2 className="text-center">All products</h2>
      {products && (
        <div className="products-container container mt-4">
          {products.map((product) => {
            return <ProductModel key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
}

export default AllProducts;
