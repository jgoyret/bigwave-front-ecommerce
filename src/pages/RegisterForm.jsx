import React, { useState } from "react";
import NavBarApp from "../components/NavBarApp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();
    try {
      console.log("new user");
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/users`,
        method: "post",
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBarApp />;
      <div className=" container container-login d-flex align-items-center justify-content-center flex-column">
        <div className="p-5 rounded shadow mb-5 w-100 w-md-75 w-lg-50  mt-4">
          <h3 className="text-center">Create your account </h3>
          <div>
            <Form className="mb-5" onSubmit={handleNewUser}>
              <Form.Group className="mt-5 mb-3" controlId="formBasicFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100 btn-checkout-cart" type="submit">
                Create account
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterForm;
