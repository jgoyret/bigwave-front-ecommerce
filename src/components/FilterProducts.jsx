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
    <div id="filter" className="container-fluid mb-3">
      <div className="row justify-content-end">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row g-2">
            <div className="col-12 col-sm-6">
              <div className="search position-relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="form-control pe-5"
                  required=""
                />
                <button className="btn position-absolute end-0 top-0 bottom-0">
                  <svg
                    className="search__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <Form.Select
                aria-label="Default select example"
                onChange={handleCategoryChange}
                className="w-100"
              >
                <option value="products">All Products</option>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <option
                      key={category.id}
                      value={`categories/${category.slug}`}
                    >
                      {category.name}
                    </option>
                  ))}
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
