import { useEffect, useState } from "react";
import { DropdownItem, NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import Category from "../pages/Category";

function NavBarApp() {
  const [categories, setCategories] = useState();

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
  return (
    <>
      <Navbar expand="lg" className="navbar position-sticky">
        <Container fluid>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
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
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-transparent"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Link to={"/login"}>
              <i className="bi bi-person text-success ms-5"></i>
            </Link>
            <NavLink>
              <i className="bi bi-cart text-success ms-4 "></i>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarApp;
