import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import "../styles/cart.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart({ show, handleClose }) {
  const cart = useSelector((state) => state.cart);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100 ">
            <CartProduct />
            <div className="mt-auto">
              <hr />
              <div className="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <span>{totalAmount.toFixed(2)}</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, aut.
              </p>
              <Link
                to={cart.length > 0 && "/checkout"}
                onClick={() => {
                  cart.length === 0 && toast.error("Cart is empty");
                }}
                className="btn btn-checkout-cart py-2 w-100"
              >
                Checkout
              </Link>
              <p className="text-center mt-3">
                or
                <button onClick={handleClose} className="btn">
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
