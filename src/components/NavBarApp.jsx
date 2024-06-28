import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBarApp() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
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
                <NavDropdown.Item href="#action1">
                  Nuts, cereals and seeds
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Sugars and substitutes
                </NavDropdown.Item>

                <NavDropdown.Item href="#action3">
                  Dairy, plant based milk
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Superfoods</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pantry & spices
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">Beverages</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Snacks</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">About this project</Nav.Link>
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
            <Nav.Link href="#action2">
              <i className="bi bi-person text-success ms-5"></i>
            </Nav.Link>
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
