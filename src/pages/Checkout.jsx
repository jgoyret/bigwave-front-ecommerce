import { TextField, Select, Button, Box, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import NavBarApp from "../components/NavBarApp";
import Footer from "../components/Footer";
import "../styles/Checkout.css";
import CountrySelect from "../components/CountrySelect";
import { useSelector } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  removeQuantity,
  clearCart,
} from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const { id, name, price, quantity, categoryId } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 30;
  const taxes = 20;
  const totalAmount = (subTotal + taxes + shipping).toFixed(2);

  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalcode: Yup.string().required("Postal code is required"),
    phone: Yup.string().required("Phone is required"),
    cardnumber: Yup.string().required("Card number is required"),
    cardholder: Yup.string().required("Card holder is required"),
    expirationdate: Yup.string().required("Expiration date is required"),
    cvv: Yup.string().required("CVV is required"),
  });

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
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/orders`,
        method: "POST",
        data: {
          userId: user.id,
          products: cart,
          form: formData,
          totalAmount: totalAmount,
          address: formData.address,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Order created");
        navigate("/order-completed");
        dispatch(clearCart());
      } else {
        console.log("there was a problem with your order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (values) => {
    handleAddOrder();
    console.log("Form submitted:", values);
  };

  return (
    <>
      <NavBarApp />
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container container-content">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <h3>Contact Information</h3>

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
                    <Field
                      as={TextField}
                      id="firstname"
                      value={formData.firstname}
                      name="firstname"
                      label="Firstname"
                      className="bg-transparent"
                      error={touched.firstname && !!errors.firstname}
                      helperText={touched.firstname && errors.firstname}
                      onChange={handleChange}
                      fullWidth
                    />
                    <Field
                      as={TextField}
                      id="lastname"
                      value={formData.lastname}
                      name="lastname"
                      label="Lastname"
                      className="bg-transparent"
                      error={touched.lastname && !!errors.lastname}
                      helperText={touched.lastname && errors.lastname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      as={TextField}
                      id="address"
                      value={formData.address}
                      name="address"
                      label="Address"
                      className="bg-transparent"
                      error={touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <Field
                      as={TextField}
                      id="city"
                      value={formData.city}
                      name="city"
                      label="city"
                      className="bg-transparent"
                      error={touched.city && !!errors.city}
                      helperText={touched.city && errors.city}
                      onChange={handleChange}
                      fullWidth
                    />
                    <CountrySelect />
                  </div>
                  <div className="d-flex mb-3">
                    <Field
                      as={TextField}
                      id="state"
                      value={formData.state}
                      name="state"
                      label="State"
                      className="bg-transparent"
                      error={touched.state && !!errors.state}
                      helperText={touched.state && errors.state}
                      onChange={handleChange}
                      fullWidth
                    />
                    <Field
                      as={TextField}
                      id="postalcode"
                      value={formData.postalcode}
                      name="postalcode"
                      label="Postal Code"
                      className="bg-transparent"
                      error={touched.postalcode && !!errors.postalcode}
                      helperText={touched.postalcode && errors.postalcode}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <Field
                    as={TextField}
                    id="phone"
                    value={formData.phone}
                    name="phone"
                    label="Phone"
                    className="bg-transparent"
                    error={touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                  <hr />
                  <h3>Payment Information</h3>
                  <InputLabel id="demo-simple-select-label">
                    Payment Method
                  </InputLabel>
                  <Select
                    className="bg-transparent mb-3"
                    label="Payment Method"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem
                      className="fs-20"
                      selected={true}
                      value={"credit card"}
                    >
                      Credit card
                    </MenuItem>
                    <MenuItem value={"mercado pago"}>Mercado pago</MenuItem>
                    <MenuItem value={"paypal"}>Paypal</MenuItem>
                  </Select>
                  <div className="mb-3">
                    <Field
                      as={TextField}
                      id="cardnumber"
                      value={formData.cardnumber}
                      name="cardnumber"
                      label="Card Number"
                      className="bg-transparent"
                      error={touched.cardnumber && !!errors.cardnumber}
                      helperText={touched.cardnumber && errors.cardnumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      as={TextField}
                      id="cardholder"
                      value={formData.cardholder}
                      name="cardholder"
                      label="Card Holder"
                      className="bg-transparent"
                      error={touched.cardholder && !!errors.cardholder}
                      helperText={touched.cardholder && errors.cardholder}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="d-flex">
                    <Field
                      as={TextField}
                      id="expirationdate"
                      value={formData.expirationdate}
                      name="expirationdate"
                      label="Expiration Date"
                      className="bg-transparent"
                      error={touched.expirationdate && !!errors.expirationdate}
                      helperText={
                        touched.expirationdate && errors.expirationdate
                      }
                      onChange={handleChange}
                      fullWidth
                    />
                    <Field
                      as={TextField}
                      id="cvv"
                      value={formData.cvv}
                      name="cvv"
                      label="CVV"
                      className="bg-transparent"
                      error={touched.cvv && !!errors.cvv}
                      helperText={touched.cvv && errors.cvv}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 ">
                  <h3>Order Summary</h3>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex-row row card object-fit-cover"
                    >
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
                              ${" "}
                              <span>
                                {(item.price * item.quantity).toFixed(2)}
                              </span>
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
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
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
                  <Button type="submit" variant="contained" color="primary">
                    Confirm Order
                  </Button>
                  <div className="d-flex justify-content-center align-items-center w-50 m-5">
                    <img src="../QR.png" alt="QR" className=" w-100 h-100" />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}

export default Checkout;
