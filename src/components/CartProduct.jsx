import React from "react";
import { useSelector } from "react-redux";

function CartProduct() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="card">
          <div className="card-wrapper">
            <div className="card-icon">
              <div>
                <img
                  className="img-fluid object-fit-cover rounded-circle shadow"
                  src={item.image}
                  alt={`imagen de ${item.name}`}
                />
              </div>
            </div>
            <div className="card-content">
              <div className="product-name mt-3">{item.name}</div>
              <div className="product-description ">
                <p className="fw-bold">
                  $ <span>{item.price}</span>
                </p>
                <div className="d-flex justify-content-between">
                  <p>Quantity: {item.quantity}</p>

                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartProduct;
