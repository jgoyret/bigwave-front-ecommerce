import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import ProductModel from "../components/ProductModel";
import axios from "axios";
import "../styles/Products.css";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: "http://localhost:3000/products",
        method: "get",
      });
      setProducts(response.data);
    };

    const getCategories = async () => {
      const response = await axios({
        url: "http://localhost:3000/categories",
        method: "get",
      });
      setCategories(response.data);
      // console.log(response.data);
    };

    getCategories();
    getProducts();
  }, []);
  return (
    <>
      <NavBarApp />
      <div>
        <h2 className="text-center">All products</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="side-list-filter mt-4">
          <ul>
            <li>
              <h4>Categories</h4>
            </li>
            <li>
              <a href="/products">All products</a>
            </li>
            {categories.length > 0 &&
              categories.map((category) => {
                return (
                  <li key={category.id}>
                    <a href={`/categories/${category.slug}`}>{category.name}</a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          {products && (
            <div className="products-container container mt-4">
              {products.map((product) => {
                return <ProductModel key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
