import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import "../styles/cart.css";

function Cart({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100">
            <CartProduct />
            <div className="mt-auto">
              <hr />
              <div className="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>Price: $20</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, aut.
              </p>
              <Link to={"/checkout"} className="btn btn-checkout-cart w-100">
                Checkout
              </Link>
              <p className="text-center mt-3">
                or <a href="">Continue Shopping</a>
              </p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
