import { TextField, Select, Box, MenuItem } from "@mui/material";
import NavBarApp from "../components/NavBarApp";

import Footer from "../components/Footer";
import "../styles/Checkout.css";
import CountrySelect from "../components/CountrySelect";
import { useSelector } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  removeQuantity,
} from "../redux/cartReducer";
import { useDispatch } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <NavBarApp />
      <div className="container container-content">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <h3>Contact Information</h3>
            <Box component="form">
              <TextField
                className="bg-white"
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <hr />
              <h3>Shipping Information</h3>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-white"
                  id="firstname"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="bg-white"
                  id="lastname"
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <TextField
                  className="bg-white"
                  id="address"
                  label="Address"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-white"
                  id="city"
                  label="City"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <CountrySelect />
              </div>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-white"
                  id="state"
                  label="State"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="bg-white"
                  id="postalcode"
                  label="Postal Code"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <TextField
                className="bg-white"
                id="phone"
                label="Phone"
                type="text"
                variant="outlined"
                fullWidth
              />
              <hr />
              <h3>Payment Information</h3>
              <Select
                className="bg-white mb-3"
                label="Payment Method"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Credit Card</MenuItem>
                <MenuItem>Bitcoin</MenuItem>
                <MenuItem>Paypal</MenuItem>
              </Select>
              <div className="mb-3">
                <TextField
                  className="bg-white"
                  id="cardnumber"
                  label="Card Number"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <TextField
                  className="bg-white"
                  id="cardholder"
                  label="Card Holder"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="d-flex">
                <TextField
                  className="bg-white"
                  id="expirationdate"
                  label="Expiration Date"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="bg-white"
                  id="cvv"
                  label="CVV"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Box>
          </div>
          <div className="col-md-12 col-lg-6 ">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <div className="flex-row row card object-fit-cover shadow">
                <div className=" col-3">
                  <img
                    className="cart-image img-fluid object-fit-cover w-100 h-100"
                    src={item.image}
                    alt="Card image cap"
                  ></img>
                </div>
                <div className="col-9">
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
                            onClick={() =>
                              dispatch(removeQuantity({ id: item.id }))
                            }
                            className="bi bi-dash-circle"
                          ></i>{" "}
                          {item.quantity}{" "}
                          <i
                            onClick={() =>
                              dispatch(addQuantity({ id: item.id }))
                            }
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
            <hr />
            <div>
              <hr />
              <div className="d-flex strong justify-content-between">
                <p>Subtotal</p>
                <p className="fw-bold">35 USD</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p className="fw-bold">50 USD</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Taxes</p>
                <p className="fw-bold">30 USD</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h3>Total</h3>
                <p className="fw-bold">115 USD</p>
              </div>
              <button className="btn btn-primary">Confirm Order</button>
              <div className="d-flex justify-content-center align-items-center w-50 m-5">
                <img src="../QR.png" alt="QR" className=" w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
