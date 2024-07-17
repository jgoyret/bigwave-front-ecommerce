import React, { useEffect, useState } from "react";
import { TextField, Select, Button, MenuItem, styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import "../styles/Checkout.css";
import CountrySelect from "../components/CountrySelect";
import { useSelector } from "react-redux";
import { clearCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { faker } from "@faker-js/faker";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState([]);
  // const [toConfirmOrder, setToConfirmOrder] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const taxes = 30;
  const totalAmount = (subTotal + taxes + shipping).toFixed(2);

  // CSS outlined input text field
  const OutlinedTextField = styled(
    TextField,
    Select,
    CountrySelect
  )({
    "& input:valid + fieldset": {
      borderColor: "black",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  });

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

  const futureDate = faker.date.future({ years: 5 });
  const month = futureDate.getMonth() + 1;
  const year = futureDate.getFullYear() % 100;
  const formattedMonth = month.toString().padStart(2, "0");
  const formattedYear = year.toString().padStart(2, "0");

  const initialValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postalcode: faker.location.zipCode(),
    phone: faker.phone.number(),
    cardnumber: faker.finance.creditCardNumber(),
    cardholder: `${user.firstname} ${user.lastname}`,
    expirationdate: `${formattedMonth}/${formattedYear}`,
    cvv: faker.finance.creditCardCVV(),
  };

  const handleAddOrder = async (values) => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/orders`,
        method: "POST",
        data: {
          userId: user.id,
          products: cart,
          form: values,
          totalAmount: totalAmount,
          address: values.address,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        for (const item of cart) {
          await axios({
            url: `${import.meta.env.VITE_API_URL}/products/${
              item.id
            }/update-stock`,
            method: "PUT",
            data: {
              quantity: item.quantity,
            },
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          });
        }

        navigate("/order-completed", { state: { order: response.data } });
        dispatch(clearCart());
      } else {
        console.log("There was a problem with your order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    if (user.token) {
      // setToConfirmOrder(true);
      handleAddOrder(values);
    } else {
      navigate("/login");
      toast.info("You must be logged in to complete the order");
    }
    console.log("Form submitted:", values);
  };

  useEffect(() => {
    !cart.length > 0 && navigate("/");
  }, []);

  return (
    cart.length > 0 && (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, values, setFieldValue }) => (
            <Form>
              <div className="container container-content">
                <div className="row checkout-container">
                  <div className="col-md-12 col-lg-6">
                    <hr />
                    <h5>Contact Information</h5>
                    <OutlinedTextField
                      className="bg-transparent"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange}
                      fullWidth
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />

                    <hr />
                    <h5>Shipping Information</h5>
                    <div className="d-flex mb-3 gap-3">
                      <Field
                        as={OutlinedTextField}
                        id="firstname"
                        name="firstname"
                        label="Firstname"
                        className="bg-transparent"
                        error={touched.firstname && !!errors.firstname}
                        helperText={touched.firstname && errors.firstname}
                        onChange={handleChange}
                        fullWidth
                      />
                      <Field
                        as={OutlinedTextField}
                        id="lastname"
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
                        as={OutlinedTextField}
                        id="address"
                        name="address"
                        label="Address"
                        className="bg-transparent"
                        error={touched.address && !!errors.address}
                        helperText={touched.address && errors.address}
                        onChange={handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="d-flex mb-3 gap-3">
                      <Field
                        as={OutlinedTextField}
                        id="city"
                        name="city"
                        label="City"
                        className="bg-transparent"
                        error={touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        onChange={handleChange}
                        fullWidth
                      />
                      <CountrySelect
                        value={values.country}
                        onChange={(event) =>
                          setFieldValue("country", event.target.value)
                        }
                      />
                    </div>
                    <div className="d-flex mb-3 gap-3">
                      <Field
                        as={OutlinedTextField}
                        id="state"
                        name="state"
                        label="State"
                        className="bg-transparent"
                        error={touched.state && !!errors.state}
                        helperText={touched.state && errors.state}
                        onChange={handleChange}
                        fullWidth
                      />
                      <Field
                        as={OutlinedTextField}
                        id="postalcode"
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
                      as={OutlinedTextField}
                      id="phone"
                      name="phone"
                      label="Phone"
                      className="bg-transparent"
                      error={touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                    <hr />
                    <h5>Payment Information</h5>
                    <InputLabel id="demo-simple-select-label">
                      Payment Method
                    </InputLabel>
                    <Select
                      className="bg-transparent mb-3"
                      label="Payment Method"
                      variant="outlined"
                      fullWidth
                      value={values.paymentMethod || "credit card"}
                      // defaultChecked="credit card"
                      onChange={(event) =>
                        setFieldValue("paymentMethod", event.target.value)
                      }
                    >
                      <MenuItem value="credit card">Credit card</MenuItem>
                      <MenuItem value="mercado pago">Mercado pago</MenuItem>
                      <MenuItem value="paypal">Paypal</MenuItem>
                    </Select>
                    <div
                      className={
                        values.paymentMethod === "credit card" ||
                        values.paymentMethod === undefined
                          ? ""
                          : "d-none"
                      }
                    >
                      <div className="mb-3">
                        <Field
                          as={OutlinedTextField}
                          id="cardnumber"
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
                          as={OutlinedTextField}
                          id="cardholder"
                          name="cardholder"
                          label="Card Holder"
                          className="bg-transparent"
                          error={touched.cardholder && !!errors.cardholder}
                          helperText={touched.cardholder && errors.cardholder}
                          onChange={handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="d-flex gap-3">
                        <Field
                          as={OutlinedTextField}
                          id="expirationdate"
                          name="expirationdate"
                          label="Expiration Date"
                          className="bg-transparent"
                          error={
                            touched.expirationdate && !!errors.expirationdate
                          }
                          helperText={
                            touched.expirationdate && errors.expirationdate
                          }
                          onChange={handleChange}
                          fullWidth
                        />
                        <Field
                          as={OutlinedTextField}
                          id="cvv"
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
                    <div
                      className={
                        values.paymentMethod === "mercado pago" ? "" : "d-none"
                      }
                    >
                      <h6>Scan to pay: </h6>
                      <Tippy content="Not implemented" placement="right">
                        <img
                          className="styledQR"
                          src="../../public/QR.png"
                          alt=""
                        />
                      </Tippy>
                    </div>
                    <div
                      className={
                        values.paymentMethod === "paypal" ? "" : "d-none"
                      }
                    >
                      <Tippy content="Not implemented" placement="right">
                        <p className="falseButton">Continue to Paypal</p>
                      </Tippy>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-6">
                    <hr />
                    <h5>Order Summary</h5>
                    {cart.map((item) => (
                      <div key={item.id} className="flex-row row card-summary">
                        <div className="col-2 d-flex align-items-center">
                          <img
                            className="cart-image img-fluid"
                            src={item.image}
                            style={{ height: 80 }}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="col-9">
                          <div className="card-content">
                            <div className="product-name fs-6">{item.name}</div>
                            <div className="product-description">
                              <p className="fw-bold">
                                ${" "}
                                <span>
                                  {(item.price * item.quantity).toFixed(2)}
                                </span>
                              </p>
                              <div className="d-flex justify-content-between">
                                <p>Quantity: {item.quantity}</p>
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
                        <p>{subTotal.toFixed(2)} USD</p>
                      </div>
                      {subTotal.toFixed(2) < 50 ? (
                        <div className="d-flex justify-content-between">
                          <p>Shipping</p>
                          <p>50.00 USD</p>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-between">
                          <p>Shipping</p>
                          <p className="text-danger">FREE</p>
                        </div>
                      )}

                      <div className="d-flex justify-content-between">
                        <p>Taxes</p>
                        <p>30.00 USD</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>Total</h5>
                        {subTotal.toFixed(2) < 50 ? (
                          <p className="text-decoration-line-through text-danger d-none">
                            {totalAmount} USD
                          </p>
                        ) : (
                          <p className="text-decoration-line-through text-danger">
                            {totalAmount} USD
                          </p>
                        )}
                      </div>
                      <div className="d-flex">
                        <p className="fw-bold ms-auto mt-1 fs-6">
                          {subTotal.toFixed(2) < 50
                            ? totalAmount
                            : (subTotal + taxes).toFixed(2)}{" "}
                          USD
                        </p>
                      </div>
                    </div>
                    <div className={cart.length > 0 ? "" : "d-none"}>
                      <Button
                        type="submit"
                        variant="contained"
                        className="btn btn-checkout w-100"
                      >
                        Confirm Order
                      </Button>
                    </div>

                    {/* <div className={cart.length === 0 ? "" : "d-none"}>
                      <p>
                        Cannot proceed with an <strong>empty cart</strong>.{" "}
                        <Link to="/products">
                          {" "}
                          Clic here to continue shopping{" "}
                        </Link>{" "}
                      </p>
                    </div> */}
                    {/* <div className="d-flex justify-content-center align-items-center w-50 m-5">
                    <img src="../QR.png" alt="QR" className=" w-100 h-100" />
                  </div> */}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    )
  );
}

export default Checkout;
