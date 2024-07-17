import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ProductModel from "../components/ProductModel";
import "../styles/Products.css";
import ProductsSideNavbar from "../components/ProductsSideNavbar";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function Category() {
  const user = useSelector((state) => state.user);
  const [category, setCategory] = useState();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/categories/${params.slug}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      setCategory(response.data);
    };
    getCategory();
  }, [location.pathname]);
  return (
    <>
      <Container>
        <header>
          <div className="d-flex category-header justify-content-center align-items-center position-relative ">
            <div className="text-center">
              <h4 className="category-title-header">
                {params.slug.replace(/-/g, " ")}
              </h4>
            </div>
          </div>
        </header>
        <div className="d-flex justify-content-start my-3">
          <ProductsSideNavbar />
          {category && (
            <div className="products-container mt-5 justify-content-center">
              {category.Products.map((c) => {
                return <ProductModel key={c.id} product={c} />;
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Category;
