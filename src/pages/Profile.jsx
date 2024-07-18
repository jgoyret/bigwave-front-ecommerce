import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import "../styles/profile.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartReducer";
import { toast } from "react-toastify";

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

function Profile() {
  const dispatch = useDispatch();
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

  //open delete user modal
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const handleOpenDeleteUserModal = () => setOpenDeleteUserModal(true);
  const handleCloseDeleteUserModal = () => setOpenDeleteUserModal(false);

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
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const deleteUser = async () => {
    try {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      toast.info("Account deleted successfully", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = () => {
    if (loggedUser.email !== "carlitos@gmail.com") {
      dispatch(clearCart());
      dispatch(logout());
      deleteUser();
      navigate("/");
    } else {
      console.log("You can't delete this account");
      toast.error("You can't delete this account", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {loggedUser && (
        <>
          <div className="container my-profile-container ">
            <div className="my-profile-data ">
              <div className="row d-flex profile-box">
                <div className="col-12 col-md-6">
                  <h3>
                    Hi, {loggedUser.firstname}{" "}
                    <span className="d-inline-block ">
                      <Link className="text-dark" onClick={handleOpenModal}>
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                    </span>
                  </h3>
                  <small>
                    Client since{" "}
                    {new Date(loggedUser.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <div className="col-12 col-md-6">
                  <h4>Personal information</h4>
                  <p>
                    <strong>Name:</strong> {loggedUser.firstname}
                  </p>
                  <p>
                    <strong>Lastname:</strong> {loggedUser.lastname}
                  </p>
                  <p>
                    <strong>Email:</strong> {loggedUser.email}
                  </p>
                  <div className="d-flex justify-content-between">
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
            </div>
            {/* MIS ORDENES */}
            <div className="my-orders">
              <h3>MY ORDERS</h3>
            </div>
            <div className="order-header d-flex justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col-md-2 col-4">Order ID</div>
                <div className="col-md-2 col-4">Date</div>
                <div className="col-md-3 d-none d-md-inline">Address</div>
                <div className="col-md-2 d-none d-md-inline">Status</div>
                <div className="col-md-1 d-none d-md-inline">Total</div>
                <div className="col-md-2 col-4 d-flex justify-content-center">
                  Actions
                </div>
              </div>
            </div>
            {loggedUser.Orders.length === 0 && (
              <h5 className="text-center mt-5">No orders yet</h5>
            )}
            {loggedUser.Orders.length > 0 &&
              loggedUser.Orders.map((order) => (
                <div key={order.id} className="order-detail">
                  <div className="row w-100 d-flex align-items-center justify-content-center">
                    <div className="col-md-2 col-4 fw-bold">{order.id}</div>
                    <div className="col-md-2 col-4">
                      {order.createdAt.slice(0, 10)}
                    </div>
                    <div className="col-md-3 d-none d-md-inline">
                      {order.address}
                    </div>
                    <div className="col-md-2 d-none d-md-inline">
                      {order.status}
                    </div>
                    <div className="col-md-1 d-none d-md-inline">
                      ${order.totalAmount}
                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-center">
                      <i
                        onClick={() => handleGoToOrder(order)}
                        class="d-flex bi bi-eye-fill fs-2"
                      ></i>
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
              <button
                className="ms-auto modal-close-button"
                onClick={handleCloseModal}
              >
                <i class="bi bi-x-lg"></i>
              </button>
              <Typography
                sx={{ fontFamily: "inherit" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-center"
              >
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
                className="w-100 mb-3 btn-checkout-cart mt-3"
              >
                Guardar
              </button>
              <div className="d-flex justify-content-center">
                <Link className="delete-text fw-bold">
                  <i
                    onClick={handleOpenDeleteUserModal}
                    className="bi bi-trash"
                  >
                    {" "}
                    Delete account
                  </i>
                </Link>
              </div>
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
              <button
                className="ms-auto modal-close-button"
                onClick={handleClosePasswordModal}
              >
                <i class="bi bi-x-lg"></i>
              </button>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-center"
              >
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
                className="w-100 mb-3 btn-checkout-cart mt-3"
              >
                Guardar
              </button>
            </Box>
          </Modal>

          {/* MODAL DELETE USER */}
          <Modal
            open={openDeleteUserModal}
            onClose={handleCloseDeleteUserModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box component="form" sx={style}>
              <button
                className="ms-auto modal-close-button"
                onClick={handleCloseDeleteUserModal}
              >
                <i class="bi bi-x-lg"></i>
              </button>
              <i class="bi bi-exclamation-triangle text-center text-danger"></i>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                className="text-center"
              >
                Are you sure you want to delete your account?
              </Typography>
              <button
                type="submit"
                onClose={handleCloseDeleteUserModal}
                onClick={handleDeleteUser}
                className="w-100 mb-3 btn-checkout-cart mt-3"
              >
                Confirm
              </button>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}

export default Profile;
