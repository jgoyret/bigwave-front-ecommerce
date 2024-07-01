import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Cart({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100">
            <div className="d-flex mb-3">
              <div>
                <img
                  className="cart-image img-fluid object-fit-cover shadow"
                  src="https://quieronatural.uy/wp-content/uploads/2024/04/almendras-con-chocolate-negro-430x430.jpg"
                  alt=""
                />
              </div>
              <div className="ms-3 flex-grow-1">
                <div className="d-flex justify-content-between">
                  <h6>Product</h6>
                  <p>Price</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Qty: 1</p>
                  <a href="">Remove</a>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <hr />
              <div className="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>Price</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, aut.
              </p>
              <Link to={"/checkout"} className="btn btn-success w-100">
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
