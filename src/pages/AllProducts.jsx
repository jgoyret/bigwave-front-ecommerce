import React, { useEffect, useState } from "react";
import ProductModel from "../components/ProductModel";
import axios from "axios";
import "../styles/Products.css";
import ProductsNavbar from "../components/ProductsNavbar";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 18; // Adjusted to 18 products per page

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/products`,
          method: "get",
          params: { page, limit: itemsPerPage },
        });

        const allProducts = response.data; // Assuming response data is an array of all products
        setTotalProducts(allProducts.length);
        const paginatedProducts = allProducts.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        );
        setProducts(paginatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [page]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <>
      <div className="container">
        <header>
          <div
            className="d-flex category-header justify-content-center align-items-center position-relative"
            // id="header-image"
          >
            <div className="text-center">
              <h4 className="category-title-header">All products</h4>
            </div>
          </div>
        </header>
      </div>
      <div className="d-flex justify-content-center container-main-products">
        <ProductsNavbar />
        <div>
          {products.length > 0 && (
            <div className="products-container container mt-4 justify-content-center">
              {products.map((product) => (
                <ProductModel key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      {totalPages > 0 && (
        <nav>
          <ul className="pagination justify-content-center mt-4">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => {
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${page === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    setPage(index + 1);
                    window.scrollTo(0, 0);
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default AllProducts;
