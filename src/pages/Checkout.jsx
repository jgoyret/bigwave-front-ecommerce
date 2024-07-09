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
import { useState } from "react";
import axios from "axios";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { id, name, price, quantity, categoryId } = cart;

  const dispatch = useDispatch();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 30;
  const taxes = 20;
  const totalAmount = (subTotal + taxes + shipping).toFixed(2);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        {
          userId: user.id,
          products: cart,
          form: formData,
          totalAmount: totalAmount,
          address: formData.address,
        }
      );

      if (response.status === 200) {
        console.log("Order created");
      } else {
        console.log("there was a problem with your order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <NavBarApp />
      <div className="container container-content">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <h3>Contact Information</h3>
            <Box component="form">
              <TextField
                className="bg-transparent"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <hr />
              <h3>Shipping Information</h3>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-transparent"
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  value={formData.firstname}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  className="bg-transparent"
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  value={formData.lastname}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <TextField
                  className="bg-transparent"
                  id="address"
                  name="address"
                  label="Address"
                  type="text"
                  variant="outlined"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-transparent"
                  id="city"
                  name="city"
                  label="City"
                  type="text"
                  variant="outlined"
                  value={formData.city}
                  onChange={handleChange}
                  fullWidth
                />
                <CountrySelect />
              </div>
              <div className="d-flex mb-3">
                <TextField
                  className="bg-transparent"
                  id="state"
                  name="state"
                  label="State"
                  type="text"
                  variant="outlined"
                  value={formData.state}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  className="bg-transparent"
                  id="postalcode"
                  name="postalcode"
                  label="Postal Code"
                  type="text"
                  variant="outlined"
                  value={formData.postalcode}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <TextField
                className="bg-transparent"
                id="phone"
                name="phone"
                label="Phone"
                type="text"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              <hr />
              <h3>Payment Information</h3>
              <Select
                className="bg-transparent mb-3"
                label="Payment Method"
                variant="outlined"
                fullWidth
              >
                <MenuItem>Credit card</MenuItem>
                <MenuItem>Mercado pago</MenuItem>
                <MenuItem>Paypal</MenuItem>
              </Select>
              <div className="mb-3">
                <TextField
                  className="bg-transparent"
                  id="cardnumber"
                  label="Card Number"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="mb-3">
                <TextField
                  className="bg-transparent"
                  id="cardholder"
                  label="Card Holder"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="d-flex">
                <TextField
                  className="bg-transparent"
                  id="expirationdate"
                  label="Expiration Date"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="bg-transparent"
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
              <div key={item.id} className="flex-row row card object-fit-cover">
                <div className="col-2 d-flex align-items-center">
                  <img
                    className="cart-image img-fluid object-fit-cover w-100"
                    src={item.image}
                    style={{ height: 80 }}
                    alt="Card image cap"
                  ></img>
                </div>
                <div className="col-9">
                  <div className="card-content">
                    <div className="product-name fs-5">{item.name}</div>
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
              <div className="d-flex strong justify-content-between">
                <p>Subtotal</p>
                <p className="fw-bold">{subTotal.toFixed(2)}</p>
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
                <p className="fw-bold">{totalAmount} USD</p>
              </div>
            </div>
            <button onClick={handleAddOrder} className="btn btn-primary">
              Confirm Order
            </button>
            <div className="d-flex justify-content-center align-items-center w-50 m-5">
              <img src="../QR.png" alt="QR" className=" w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
