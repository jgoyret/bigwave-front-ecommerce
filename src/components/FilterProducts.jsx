import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        method: "get",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="filter-products d-flex justify-content-evenly p-3">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-2 rounded"
      />
      <select onChange={handleCategoryChange} className="px-2 rounded">
        <option value="products">All Products</option>
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <option key={category.id} value={`categories/${category.slug}`}>
                {category.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterProducts;
