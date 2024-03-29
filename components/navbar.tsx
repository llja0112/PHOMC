'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default function HomeNavbar () {
  return (
    <Navbar data-bs-theme="dark" expand="lg" style={{background: "#011422"}}>
      <Container>
        <Navbar.Brand as={Link} href="/home">
          PHOMC 2024
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">About</Nav.Link>
            <Nav.Link as={Link} href="/">Programme</Nav.Link>
            <Nav.Link as={Link} href="/">Call for paper</Nav.Link>
            <Nav.Link as={Link} href="/">Sponsorship</Nav.Link>
            <Nav.Link as={Link} href="/">Travel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
