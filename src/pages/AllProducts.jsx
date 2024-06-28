import React from "react";
import NavBarApp from "../components/NavBarApp";
import Product from "../components/Product";

function AllProducts() {
  return (
    <>
      <NavBarApp />
      <h2 className="text-center">All products</h2>
      <div className="products-container">
        <Product />
      </div>
    </>
  );
}

export default AllProducts;
