import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import Product from "../components/Product";
import axios from "axios";

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
        <div className="products-container">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
}

export default AllProducts;
