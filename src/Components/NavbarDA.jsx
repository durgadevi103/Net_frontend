import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '/src/Css/Navbar.css';
import logo1 from "/src/assets/Mylogo.jpeg"

const NavbarDA = ({ cart }) => {
  const [show, setShow] = useState(false);
  const [carts, setCarts] = useState(cart);
  const baseURL = "http://127.0.0.1:8000";

  const handleShow = () => {
    setCarts(cart);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Navbar expand="lg" className="navblog">
      <Container>
        <Navbar.Brand href="#home" className="navname">
          <Link to="/"><img className="navimg text-decoration-none" src={logo1} alt="DA's Cares" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="fw-bold">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="navtype">Home</Nav.Link>
            <Nav.Link as={Link} to="/cosmetics" className="navtype">Cosmetics</Nav.Link>
            <Nav.Link as={Link} to="/haircare" className="navtype">HairCare</Nav.Link>
            <Nav.Link as={Link} to="/skincare" className="navtype">SkinCare</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="nav5">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart4 cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </Nav.Link>
            <Link to="/Signup">
              <Button variant="outline-primary" id='Mylogin'>LOGIN</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Offcanvas for Cart */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-cart">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {carts.length === 0 ? (
            <p>Your Cart is Empty</p>
          ) : (
            carts.map((item, index) => (
              <Card key={index} className=" align-items-center mb-3 w-50">
                <Card.Img variant="top" src={item.product_image.startsWith(baseURL) ? item.product_image : baseURL + item.product_image} className='addtocart_image' />
                <Card.Body className="text-center">
                  <Card.Title className='addtocart_name'>{item.product_name}</Card.Title>
                  <Card.Text className='addtocart_price'>Price: {item.product_price}</Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavbarDA;
