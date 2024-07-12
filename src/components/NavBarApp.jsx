import { useEffect, useState } from "react";
import { DropdownItem, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast } from "react-toastify";
import { clearCart } from "../redux/cartReducer";

function NavBarApp() {
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);

  const [categories, setCategories] = useState();
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      toast.info("You logged out 😭 see you soon!", {
        position: "bottom-right",
      });
      dispatch(logout());
      dispatch(clearCart());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/categories`,
        method: "get",
      });

      setCategories(response.data);
    };
    getCategories();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/bigwave-logo.png"
              alt="BigWave Logo"
              height="50"
              className="d-inline-block align-top rounded"
            />
          </Navbar.Brand>
          <NavLink
            className="nav-link cart-responsive"
            onClick={handleShowCart}
          >
            <i className="bi bi-cart text-dark fs-4"></i>
            {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <DropdownItem href="/products">All products</DropdownItem>
                {categories && (
                  <div>
                    {categories.map((category) => {
                      return (
                        <DropdownItem
                          href={`/categories/${category.slug}`}
                          key={category.id}
                        >
                          {category.name}
                        </DropdownItem>
                      );
                    })}
                  </div>
                )}
              </NavDropdown>
              <Nav.Link href="/about-this-project">About this project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown
            title={<i className="bi bi-person text-dark  fs-3"></i>}
            id="navbarScrollingDropdown"
          >
            {token ? (
              <>
                <DropdownItem className=" " as={Link} to={"/my-profile"}>
                  Profile
                </DropdownItem>
                <DropdownItem as={Link} onClick={handleLogout} to={"/"}>
                  Logout
                </DropdownItem>
              </>
            ) : (
              <DropdownItem as={Link} to={"/login"}>
                Login
              </DropdownItem>
            )}
          </NavDropdown>
          <NavLink
            className="nav-link position-relative"
            onClick={handleShowCart}
          >
            <div className="position-relative d-inline-block">
              <i className="bi bi-cart cart-resp text-dark mx-2 fs-4"></i>
              {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
          </NavLink>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} />
    </>
  );
}

export default NavBarApp;
