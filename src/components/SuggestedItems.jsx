import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SuggestedItems = ({ categoryId, currentProductSlug, products }) => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const fetchSuggestedProducts = async () => {
      try {
        const allProducts = products;
        const filteredProducts = allProducts.filter(
          (product) => product.slug !== currentProductSlug
        );
        const shuffledProducts = filteredProducts.sort(
          () => 0.5 - Math.random()
        );
        setSuggestedProducts(shuffledProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching suggested products:", error);
      }
    };

    if (categoryId) {
      fetchSuggestedProducts();
    }
  }, [categoryId, currentProductSlug]);

  return (
    suggestedProducts.length > 0 && (
      <section className="container mt-2">
        <div className="row mb-4">
          <div className="col text-center">
            <h1>Try these other healthy products</h1>
          </div>
        </div>
        <div className="suggested-container">
          {suggestedProducts.map((suggestedProduct) => (
            <div
              key={suggestedProduct.slug}
              className="col-md-4 text-center shadow suggested-card rounded mt-4"
            >
              <Link to={`/products/${suggestedProduct.slug}`}>
                <img
                  src={suggestedProduct.image}
                  alt={suggestedProduct.name}
                  className="img-fluid rounded mb-2"
                />
              </Link>
              <p>{suggestedProduct.name}</p>
              <p>{suggestedProduct.price} USD</p>
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default SuggestedItems;
