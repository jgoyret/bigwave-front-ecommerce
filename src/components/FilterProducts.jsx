import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/filterProducts.css";
import Form from "react-bootstrap/Form";

function FilterProducts({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const path = e.target.value;
    navigate(`/${path}`);
  };

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/categories`,
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="d-flex justify-content-end filter-container mb-3">
      <div className="row filter-products">
        <div className="col-6 col-md-6 search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-2 rounded search__input"
            required=""
          />
          <button className="search__button">
            <svg
              className="search__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="col-6 col-md-6 ">
          <Form.Select
            aria-label="Default select example"
            onChange={handleCategoryChange}
          >
            <option value="products">All Products</option>
            {categories.length > 0 &&
              categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    value={`categories/${category.slug}`}
                  >
                    {category.name}
                  </option>
                );
              })}
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
