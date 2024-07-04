import { useEffect, useState } from "react";
import { DropdownItem, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";
import Cart from "./Cart";
import CartProduct from "./CartProduct";

function NavBarApp() {
  const [categories, setCategories] = useState();
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: "http://localhost:3000/categories",
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
            <div className="input-wrapper">
              <button className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#000000"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
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
            </div>
            <Link to={"/login"}>
              <i className="bi bi-person text-dark ms-5 fs-3"></i>
            </Link>
            <NavLink className="nav-link" onClick={handleShowCart}>
              <i className="bi bi-cart text-dark ms-4 fs-4 "></i>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleCloseCart} />
    
    </>
  );
}

export default NavBarApp;
