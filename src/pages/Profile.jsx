import NavBarApp from "../components/NavBarApp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import "../styles/profile.css";
import { Link, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Profile() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [loggedUser, setLoggedUser] = useState();

  //open update profile modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //open update password modal
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const handleOpenPasswordModal = () => setOpenPasswordModal(true);
  const handleClosePasswordModal = () => setOpenPasswordModal(false);

  //form data
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const updateUser = async () => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        data: {
          firstname: firstname || loggedUser.firstname,
          lastname: lastname || loggedUser.lastname,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserPassword = async () => {
    try {
      if (password.length < 6) {
        alert("Password must be at least 6 characters long");
      } else {
        if (password !== repeatedPassword) {
          alert("Passwords do not match");
        } else {
          const response = await axios({
            url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}` },
            data: {
              password: password,
            },
          });
        }

        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoToOrder = (order) => {
    navigate(`/order/${order.id}`, { state: { order } });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const getUser = async () => {
      try {
        const response = await axios({
          url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setLoggedUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {loggedUser && (
        <>
          <NavBarApp />
          <div className="container my-profile-container ">
            <div className="my-profile-data">
              <div className="d-flex flex-column ">
                <h3>Hi, {loggedUser.firstname} </h3>
                <small>Client since {loggedUser.createdAt}</small>
                <span className="d-inline-block ">
                  <button className="edit-button" onClick={handleOpenModal}>
                    <svg className="edit-svgIcon" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="row w-75">
                <div className="col-12 col-md-6 px-0">
                  <h4 className="mt-3">Personal information</h4>
                  <p>
                    <strong>Name:</strong> {loggedUser.firstname}
                  </p>
                  <p>
                    <strong>Lastname:</strong> {loggedUser.lastname}
                  </p>
                  <p>
                    <strong>Email:</strong> {loggedUser.email}
                  </p>
                  <button
                    type="button"
                    // variant="outlined"
                    className="button-change-password"
                    onClick={handleOpenPasswordModal}
                  >
                    Change password
                  </button>
                </div>
              </div>
            </div>
            {/* MIS ORDENES */}
            <div className="my-orders">
              <h3>MY ORDERS</h3>
            </div>
            <div className="order-header">
              <div className="row w-100">
                <div className="col-md-2 col-4">Order ID</div>
                <div className="col-md-2 col-4">Date</div>
                <div className="col-md-2 d-none d-md-inline">Address</div>
                <div className="col-md-2 d-none d-md-inline">Status</div>
                <div className="col-md-2 d-none d-md-inline">Total</div>
                <div className="col-md-2 col-4">Actions</div>
              </div>
            </div>

            {loggedUser.Orders.length === 0 && <h5>No orders yet</h5>}
            {loggedUser.Orders.length > 0 &&
              loggedUser.Orders.map((order) => (
                <div key={order.id} className="order-detail ">
                  <div className="row w-100">
                    <div className="col-md-2 col-4 fw-bold">{order.id}</div>
                    <div className="col-md-2 col-4">
                      {order.createdAt.slice(0, 10)}
                    </div>
                    <div className="col-md-2 d-none d-md-inline">
                      {order.address}
                    </div>
                    <div className="col-md-2 d-none d-md-inline">
                      {order.status}
                    </div>
                    <div className="col-md-2 d-none d-md-inline">
                      {order.totalAmount}
                    </div>
                    <div className="col-md-2 col-4">
                      <button
                        className="view-order "
                        onClick={() => handleGoToOrder(order)}
                      >
                        View Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* MODAL UPDATE PERFIL */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box component="form" sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Update your profile
              </Typography>
              <TextField
                className="bg-transparent"
                id="firstname"
                label="First Name"
                type="text"
                variant="outlined"
                defaultValue={loggedUser?.firstname}
                fullWidth
                onChange={(e) => setFirstname(e.target.value)}
                sx={{ marginBottom: 5, marginTop: 5 }}
              />
              <TextField
                className="bg-transparent"
                id="lastname"
                label="Last Name"
                type="text"
                variant="outlined"
                defaultValue={loggedUser?.lastname}
                onChange={(e) => setLastname(e.target.value)}
                fullWidth
              />
              <button
                type="submit"
                onClose={handleCloseModal}
                onClick={updateUser}
                className=" w-25 button-add type1 mt-3 ml-3"
              >
                Guardar
              </button>
            </Box>
          </Modal>

          {/* MODAL UPDATE PASSWORD */}
          <Modal
            open={openPasswordModal}
            onClose={handleClosePasswordModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box component="form" sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Update your password
              </Typography>
              <TextField
                className="bg-transparent"
                id="newpassword"
                label="New Password"
                type="text"
                variant="outlined"
                defaultValue=""
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                sx={{ marginBottom: 5, marginTop: 5 }}
              />
              <TextField
                className="bg-transparent"
                id="repeatedpassword"
                label="Repeat new password"
                type="text"
                variant="outlined"
                defaultValue=""
                onChange={(e) => setRepeatedPassword(e.target.value)}
                fullWidth
              />
              <button
                type="submit"
                onClose={handleClosePasswordModal}
                onClick={updateUserPassword}
                className=" w-25 button-add type1 mt-3 ml-3"
              >
                Guardar
              </button>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}

export default Profile;
