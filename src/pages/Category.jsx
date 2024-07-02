import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductModel from "../components/ProductModel";
import "../styles/Products.css";

function Category() {
  const [category, SetCategory] = useState();
  const params = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `http://localhost:3000/categories/${params.slug}`,
        method: "get",
      });
      SetCategory(response.data);
    };
    getCategory();
  }, []);

  return (
    <>
      <NavBarApp />
      <header>
        <div
          className="d-flex h-25 justify-content-center position-relative"
          id="header-image"
        >
          <div className="ms-5 text-center fw-bold">
            <h2 className="text-capitalize">
              {params.slug.replace(/-/g, " ")}
            </h2>
          </div>
        </div>
      </header>

      {category && (
        <div className="products-container container mt-5">
          {category.map((c) => {
            return <ProductModel key={c.id} product={c} />;
          })}
        </div>
      )}
    </>
  );
}

export default Category;
