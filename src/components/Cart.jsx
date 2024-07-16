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
          <div className="d-flex flex-column h-100">
            {cart.length === 0 && (
              <p className="text-center fw-bold">
                Add{" "}
                <Link to="/products" onClick={handleClose}>
                  products
                </Link>{" "}
                to the cart
              </p>
            )}
            <CartProduct />
            <div className="mt-auto">
              <hr />
              {cart.length > 0 ? (
                <>
                  {" "}
                  <div className="d-flex justify-content-between">
                    <h6>Subtotal</h6>
                    <span>{totalAmount.toFixed(2)} USD</span>
                  </div>
                  <Link
                    to={"/checkout"}
                    onClick={() => {
                      handleClose();
                    }}
                    className="btn btn-checkout-cart py-2 w-100"
                  >
                    Checkout
                  </Link>
                  <p className="text-center mt-3">
                    or
                    <Link
                      to={"/products"}
                      onClick={handleClose}
                      className="btn"
                    >
                      Continue Shopping
                    </Link>
                  </p>{" "}
                </>
              ) : null}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
