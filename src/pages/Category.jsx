import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";

function Category() {
  const [category, SetCategory] = useState();
  const params = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `http://localhost:3000/categories/`,
        method: "get",
      });
      SetCategory(
        response.data.filter((category) => category.name === params.id)
      );
      console.log(params.id);
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
            <h2>Nombre de la categoria</h2>
            <p>Categories</p>
          </div>
        </div>
      </header>
      <div className="products-container">
        <p>
          Vista de categoria individual, falta clasificar productos segun
          categorias
        </p>
      </div>
    </>
  );
}

export default Category;
