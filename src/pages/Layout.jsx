// components/Layout.jsx
import { Link, Outlet } from "react-router-dom";
import NavbarApp from "../components/NavBarApp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartReducer";
import axios from "axios";
import "../styles/layout.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  const dispatch = useDispatch();
  const lUser = useSelector((state) => state.user);
  const [userVerified, setUserVerified] = React.useState(false);
  const [whatsappShow, setWhatsappShow] = useState(true);

  React.useEffect(() => {
    if (lUser.token) userExist();
    setUserVerified(true);
  }, []);

  const userExist = async () => {
    const response = await axios({
      url: `${import.meta.env.VITE_API_URL}/users/my-profile`,
      method: "get",
      headers: {
        Authorization: `Bearer ${lUser.token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      console.log("User exist");
    } else {
      dispatch(logout());
      dispatch(clearCart());
    }
  };

  return (
    userVerified && (
      <>
        <ScrollToTop />
        <NavbarApp />
        <ToastContainer />
        <main>
          <Outlet />
        </main>
        <div id="whatsapp" className={!whatsappShow ? "hide" : ""}>
          <div className="d-flex align-items-center">
            <i
              onClick={() => setWhatsappShow((prev) => !prev)}
              className={
                whatsappShow
                  ? "bi bi-arrow-right text-dark close-whatsapp me-3 fs-5"
                  : "bi bi-arrow-bar-left text-dark close-whatsapp me-3 fs-2"
              }
            ></i>
            <button
              target="_blank"
              rel="noreferrer"
              onClick={() => toast.info("This function is being developed")}
              className="whatsapp-button"
            >
              <i className="bi bi-whatsapp text-success ps-2"></i>
            </button>
          </div>
        </div>
        <Link to={"/about-this-project"}>
          <button
            className="btn button-about position-fixed bottom-0 end-0 m-3"
            style={{ zIndex: 1000 }}
          >
            <i className="bi bi-info-circle me-2"></i>
            About This Project
          </button>
        </Link>
        <Footer />
      </>
    )
  );
}

export default Layout;
