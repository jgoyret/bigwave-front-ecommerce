import React, { useEffect, useState } from "react";
import ProductModel from "../components/ProductModel";
import axios from "axios";
import "../styles/Products.css";
import ProductsSideNavbar from "../components/ProductsSideNavbar";
import FilterProducts from "../components/FilterProducts";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const itemsPerPage = 18;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/products`,
          method: "get",
          params: { page, limit: itemsPerPage },
        });

        const allProducts = response.data;
        setTotalProducts(allProducts.length);
        const paginatedProducts = allProducts.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        );
        setProducts(paginatedProducts);
        setFilteredProducts(paginatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();

    console.log(isSearching);
  }, [page]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    if (searchTerm) {
      setIsSearching(true); // Activar la búsqueda
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercasedTerm) ||
          product.description.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setIsSearching(false); // Desactivar la búsqueda
      setFilteredProducts(products);
    }
  };

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
          <FilterProducts onSearch={handleSearch} />
        </header>
      </div>
      <div className="d-flex justify-content-center container-main-products my-3">
        <ProductsSideNavbar />

        <div>
          {filteredProducts.length > 0 && (
            <div className="products-container container mt-5 justify-content-center">
              {filteredProducts.map((product) => (
                <ProductModel key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      {!isSearching && totalPages > 0 && (
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
