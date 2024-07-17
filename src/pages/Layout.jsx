// components/Layout.jsx
import { Outlet } from "react-router-dom";
import NavbarApp from "../components/NavBarApp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartReducer";
import axios from "axios";

function Layout() {
  const dispatch = useDispatch();
  const lUser = useSelector((state) => state.user);

  React.useEffect(() => {
    if (lUser.token) userExist();
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
    <>
      <ScrollToTop />
      <NavbarApp />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
