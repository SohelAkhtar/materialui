import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function NB() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" >
            <Link to="/" style={{textDecoration : 'none' , color :'whitesmoke'}}>Comercio Electrónico</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to = '/about' style={{textDecoration : 'none' , color :'whitesmoke'}}>About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
            <Link to = '/product' style={{textDecoration : 'none' , color :'whitesmoke'}}>Product</Link>
            </Nav.Link>
            <NavDropdown title="EN" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">हिंदी</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              తెలుగు
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">മലയാളം</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              한국인
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> 
            <Badge badgeContent={4} color="primary"><ShoppingCartCheckoutIcon/></Badge>Add to cart </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <Badge badgeContent={1} color="primary"><ShoppingCartCheckoutIcon/></Badge> Checkout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NB