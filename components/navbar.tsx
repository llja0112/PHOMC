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
        <Navbar.Brand as={Link} href="/">
          PHOMC 2024
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/programme">Programme</Nav.Link>
            <Nav.Link as={Link} href="/registration">Registration</Nav.Link>
            <Nav.Link as={Link} href="/callforpaper">Call for paper</Nav.Link>
            <Nav.Link as={Link} href="/sponsorship">Sponsorship</Nav.Link>
            <Nav.Link as={Link} href="/travel">Travel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
