import React from "react";
import NavBarApp from "../components/NavBarApp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <NavBarApp />;
      <div className=" container container-login mt-5 d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-center">Login to your account </h2>
        <div className="p-5 rounded shadow  w-100 w-md-75 w-lg-50  mt-4">
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={"maria.perez@gmail.com"} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={"1234"} />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Remember me" />
                <Link to={"/register"} className="text-decoration-none fw-bold">
                  Not register yet?
                </Link>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>

        <div className="p-5 rounded shadow w-100 w-sm-75 w-md-50 w-lg-25 mt-3 mb-5">
          <div>
            <h5>User Credentials</h5>
            <p>
              To simplify access to the application, the following test user
              is provided:
            </p>
          </div>
          <div>
            <h6>Log in as a buyer</h6>
            <ul>
              <li>Email: maria.perez@gmail.com</li>
              <li>Password: 1234</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
