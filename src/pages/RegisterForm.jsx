import React from "react";
import NavBarApp from "../components/NavBarApp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function RegisterForm() {
  return (
    <>
      <NavBarApp />;
      <div className=" container mt-5 d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-center">Create your account </h2>
        <div className="p-5 rounded shadow mb-5 w-100 w-md-75 w-lg-50  mt-4">
          <div>
            <Form className="mb-5">
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
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
