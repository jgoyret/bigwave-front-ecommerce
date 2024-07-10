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
          <Navbar.Brand href="/">BigWave</Navbar.Brand>
          <NavLink
            className="nav-link cart-responsive"
            onClick={handleShowCart}
          >
            <i className="bi bi-cart text-dark fs-4"></i>
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
            <Nav.Link className="input-wrap">
              <button className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#000000"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#000000"
                    d="M22 22L20 20"
                  ></path>
                </svg>
              </button>
              <input
                placeholder="search.."
                className="input"
                name="text"
                type="text"
              ></input>
            </Nav.Link>

            <NavDropdown
              title={<i className="bi bi-person text-dark  fs-3"></i>}
              id="navbarScrollingDropdown"
            >
              {token ? (
                <>
                  <DropdownItem as={Link} to={"/my-profile"}>
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
              <i className="bi bi-cart cart-resp text-dark mx-2 fs-4 "></i>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} />
    </>
  );
}

export default NavBarApp;
