import React from "react";

function Product({product}) {
    console.log(product)
  return (
    <>
      <div className="card bg-transparent" style={{ width: 300 }}>
        <img
          style={{ width: 300, height: 300 }}
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            Price: <span>{product.price}</span>
          </p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
