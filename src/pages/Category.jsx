import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ProductModel from "../components/ProductModel";
import "../styles/Products.css";
import ProductsNavbar from "./ProductsNavbar";
import Footer from "../components/Footer";
import BreadcrumbApp from "../components/BreadcrumbApp";

function Category() {
  const [category, setCategory] = useState();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/categories/${params.slug}`,
        method: "get",
      });
      setCategory(response.data);
    };
    getCategory();
  }, [location.pathname]);
  console.log(category);
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
              <h2 className="text-capitalize">
                {params.slug.replace(/-/g, " ")}
              </h2>
            </div>
          </div>
        </header>
        <div className="d-flex justify-content-center my-5">
          <ProductsNavbar />
          {category && (
            <div className="products-container container mt-5">
              {category.Products.map((c) => {
                return <ProductModel key={c.id} product={c} />;
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
