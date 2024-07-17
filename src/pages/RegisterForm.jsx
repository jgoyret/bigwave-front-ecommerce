import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Box, Typography, styled } from "@mui/material";

const style = {
  fontSize: 16,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

function RegisterForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              <Button
                className="w-100 btn-checkout-cart"
                type="submit"
                onClick={handleOpenModal}
              >
                Create account
              </Button>
            </Form>
            <div className="d-flex justify-content-center">
              <Link to={"/login"} className="text-decoration-none text-dark">
                {" "}
                <i class="bi bi-box-arrow-in-right"> Login</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <button
            className="ms-auto modal-close-button"
            onClick={handleCloseModal}
          >
            <i class="bi bi-x-lg"></i>
          </button>
          <i className="bi bi-check-circle text-center"></i>
          <Typography id="modal" className="text-center">
            Your account has been created!
          </Typography>
          <Link to={"/login"}>
            <button
              type="submit"
              onClose={handleCloseModal}
              className="w-100 mb-3 btn-checkout-cart mt-3"
            >
              Login
            </button>
          </Link>
        </Box>
      </Modal>
    </>
  );
}

export default RegisterForm;
