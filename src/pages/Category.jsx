import React, { useEffect, useState } from "react";
import NavBarApp from "../components/NavBarApp";
import { useParams } from "react-router-dom";
import axios from "axios";

function Category() {
  const [category, SetCategory] = useState();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `http://localhost:3000/categories/`,
        method: "get",
      });
      SetCategory(response.data);
    
    };
    getCategory();
  }, []);

  return (
    <>
      <NavBarApp />
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
