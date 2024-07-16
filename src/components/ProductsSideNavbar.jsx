import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductsSideNavbar() {
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

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
    <>
      <div className="side-list-filter mt-5">
        <div>Categories</div>
        <ul>
          <li onClick={() => navigate("/products")}>All products</li>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <li
                  onClick={() => navigate(`/categories/${category.slug}`)}
                  key={category.id}
                >
                  {category.name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default ProductsSideNavbar;
