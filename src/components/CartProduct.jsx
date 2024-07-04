import React from "react";

function CartProduct() {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-icon">
          <div>
            <img
              className="img-fluid object-fit-cover rounded-circle shadow"
              src="https://quieronatural.uy/wp-content/uploads/2024/04/almendras-con-chocolate-negro-430x430.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card-content">
          <div className="product-name mt-3">Almonds</div>
          <div className="product-description ">
            <p className="fw-bold">
              $ <span>20</span>
            </p>
            <div className="d-flex justify-content-between">
              <p>Quantity: 1</p>

              <i className="bi bi-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
