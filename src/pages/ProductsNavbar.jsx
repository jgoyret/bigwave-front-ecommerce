import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsNavbar() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: "http://localhost:3000/categories",
        method: "get",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <div className="side-list-filter mt-4">
        <div>Categories</div>
        <ul>
          <li>
            <a href="/products">All products</a>
          </li>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link to={`/categories/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default ProductsNavbar;
