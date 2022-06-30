/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MoonFill, Search } from "react-bootstrap-icons";
import Link from 'next/link'
import { Container, Nav, Navbar } from "react-bootstrap";
const darkMode = (e) => {
  document.body.className === '' ? document.body.className = 'dark' : document.body.className = ""

}
export default function NavBar() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Porfolio Front-End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            bg="light"
            expand={expand}
            className="navbar py-3 "
          >
            <Container className="jusify-content-betwwen ps-0">
              <Link href="/">
                <Nav.Link href="/">
                  <Navbar.Brand className="logo fs-3 fs-md-3 ">
                    <span>A</span>hmed <span>K</span>haled
                  </Navbar.Brand>
                </Nav.Link>
              </Link>
              <Nav className="links d-flex flex-row text-uppercase">
                <Link href="home">
                  <Nav.Link className="active ms-4" href="home">
                    Home
                  </Nav.Link>
                </Link>
                <Link href="/portfolio">
                  <Nav.Link className="ms-4" href="/portfolio">
                    Portfolio
                  </Nav.Link>
                </Link>
                <Link href="about">
                  <Nav.Link className="ms-4" href="about">
                    About
                  </Nav.Link>
                </Link>
                <Link href="services">
                  <Nav.Link className="ms-4" href="services">
                    Services
                  </Nav.Link>
                </Link>
                <Link href="contacts">
                  <Nav.Link className="ms-4" href="contacts">
                    Contacts
                  </Nav.Link>
                </Link>
                <button
                  className="bg-transparent border-0 mx-2"
                  onClick={(e) => darkMode(e)}
                >
                  <MoonFill className="dark" />
                </button>

                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </Nav>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Container>
                  <Form className="d-flex search">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button
                      variant="outline-success"
                      className="text-white border-0 rounded"
                    >
                      <Search />
                    </Button>
                  </Form>
                </Container>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 text-uppercase">
                    <Link href="home">
                      <Nav.Link href="home">Home</Nav.Link>
                    </Link>
                    <Link href="/portfolio">
                      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    </Link>
                    <Link href="about">
                      <Nav.Link href="about">
                        About
                      </Nav.Link>
                    </Link>
                    <Nav.Link href="services">Services</Nav.Link>
                    <Nav.Link href="contacts">Contacts</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </>
  );
}
