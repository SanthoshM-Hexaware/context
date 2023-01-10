import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className='NavColor'>
                {/* <Container>
                    <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> */}
                            <button><Link to="/">Home</Link></button>
                            <button><Link to="/product">Product</Link></button>
                            <button><Link to="/cart">Cart</Link></button>
                        {/* </Nav>
                    </Navbar.Collapse>
                </Container> */}
            </Navbar>
        </>
    )
}
export default Navigationbar;