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
import Swal from "sweetalert2";

function NavBarApp() {
  const token = useSelector((state) => state.user.token);
  const firstname = useSelector((state) => state.user.firstname);
  const cart = useSelector((state) => state.cart);

  const [categories, setCategories] = useState();
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();

  // const Swal = require("sweetalert2");

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const handleCloseNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && !navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
  };

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      if (cart.length > 0) {
        Swal.fire({
          title: "Are you sure?",
          text: "You will lose your cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#333",
          cancelButtonColor: "#aad054",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(logout());
            dispatch(clearCart());
            navigate("/");
            toast.info("You logged out 😭 see you soon!", {
              position: "bottom-right",
            });
          }
        });
      } else {
        dispatch(logout());
        dispatch(clearCart());
        navigate("/");
        handleCloseNavbar;
        toast.info("You logged out 😭 see you soon!", {
          position: "bottom-right",
        });
      }
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
      if (window.scrollY > 1) {
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
        sticky="top"
        id="navbar"
      >
        <Container>
          <Navbar.Brand onClick={handleCloseNavbar} as={Link} to="/">
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
              <span className="badge bg-danger rounded-pill translate-middle">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <DropdownItem
                  onClick={handleCloseNavbar}
                  as={Link}
                  to="/products"
                >
                  All products
                </DropdownItem>
                {categories && (
                  <div>
                    {categories.map((category) => {
                      return (
                        <DropdownItem
                          as={Link}
                          to={`/categories/${category.slug}`}
                          key={category.id}
                          onClick={handleCloseNavbar}
                        >
                          {category.name}
                        </DropdownItem>
                      );
                    })}
                  </div>
                )}
              </NavDropdown>
              <Nav.Link
                as={Link}
                className="fw-bold text-dark nav-about-subtitle"
                to="/about-this-project"
                onClick={() => handleCloseNavbar()}
              >
                About this project
              </Nav.Link>
            </Nav>

            {token ? (
              <>
                <span id="name-responsive" className="me-4 text-dark">
                  {" "}
                  Hi, {firstname}
                </span>

                <NavDropdown
                  title={<i className="bi bi-person text-dark  fs-3"></i>}
                  id="navbarScrollingDropdown"
                  className="py-2 person-responsive"
                >
                  <DropdownItem
                    onClick={handleCloseNavbar}
                    as={Link}
                    to={"/my-profile"}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem as={Link} onClick={handleLogout} to={"/"}>
                    Logout
                  </DropdownItem>
                </NavDropdown>
              </>
            ) : (
              <NavLink
                onClick={() => handleCloseNavbar()}
                id="login"
                as={Link}
                to="/login"
                className="login-link"
              >
                Login
              </NavLink>
            )}

            <NavLink
              className="nav-link position-relative "
              onClick={handleShowCart}
            >
              <div className="position-relative d-inline-block">
                <i className="bi bi-cart cart-resp text-dark mx-2 fs-4"></i>
                {cart.reduce((total, item) => total + item.quantity, 0) > 0 && (
                  <span className="position-absolute top-0 start-50  badge rounded-pill bg-danger">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>
            </NavLink>
          </Navbar.Collapse>
          <NavLink>
            <Cart show={showCart} handleClose={handleCloseCart} />
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarApp;
