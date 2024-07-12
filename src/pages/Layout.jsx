// components/Layout.jsx
import { Outlet } from "react-router-dom";
import NavbarApp from "../components/NavBarApp";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <NavbarApp />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
