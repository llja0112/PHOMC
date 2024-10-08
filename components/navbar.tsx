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
          PHOM 2024
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <NavDropdown title="About" align={{lg: 'start'}}>
              <NavDropdown.Item as={Link} href="/about/organisers">
                Organisers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/about/committee">
                Organising Committee
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/about/scientificCommittee">
                Scientific Committee
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/programme">Programme</Nav.Link>
            <Nav.Link as={Link} href="/speakers">Speakers</Nav.Link>
            <NavDropdown title="Papers" align={{lg: 'start'}}>
              <NavDropdown.Item as={Link} href="/papers/accepted">
                Accepted Papers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/papers/call">
                Call for Paper
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sponsors" align={{lg: 'start'}}>
              <NavDropdown.Item as={Link} href="/sponsorship/sponsors">
                Our sponsors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/sponsorship/opportunities">
                Sponsorship Opportunities
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Travel" align={{lg: 'start'}}>
              <NavDropdown.Item as={Link} href='/travel/venue'>
                Venue
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/travel/transport">
                Transport
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/travel/overseas">
                Overseas Participants
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <a 
            className="btn btn-outline-light" href="https://web.cvent.com/event/712cfd3d-f3a8-4c6e-82d3-50e958c5a72b/regProcessStep1"
            target="_blank"
            >
              Register Now
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
