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
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Search"
                type="search"
                className="input"
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
