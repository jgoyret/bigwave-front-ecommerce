import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeQuantity,
  addQuantity,
} from "../redux/cartReducer";

function CartProduct() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="user-select-none">
          <div className="card-wrapper">
            <div className="card-icon">
              <div>
                <img
                  className="img-fluid object-fit-cover rounded shadow"
                  style={{ aspectRatio: 1 / 1 }}
                  src={item.image}
                  alt={`imagen de ${item.name}`}
                />
              </div>
            </div>
            <div className="card-content">
              <div className="product-name mt-3 fs-5">{item.name}</div>
              <div className="product-description ">
                <p className="fw-bold">
                  $ <span>{(item.price * item.quantity).toFixed(2)}</span>
                </p>
                <div className="d-flex justify-content-between">
                  <p>
                    Quantity:{" "}
                    <i
                      onClick={() => dispatch(removeQuantity({ id: item.id }))}
                      className="bi bi-dash-circle"
                    ></i>{" "}
                    {item.quantity}{" "}
                    <i
                      onClick={() => dispatch(addQuantity({ id: item.id }))}
                      className="bi bi-plus-circle"
                    ></i>
                  </p>

                  <i
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bi bi-trash"
                  ></i>
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
