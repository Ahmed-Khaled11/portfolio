/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MoonFill, Search, SunFill } from "react-bootstrap-icons";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import React, { memo, useRef, useState } from "react";

const NavBar = () => {
  // close Off Canvas when click on item
  const offCanvasRef = useRef();
  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();
  // function to add CLASS 'dark' to body & change button dark to button light
    const removeClassActive = (e) => {
      const links = document.querySelectorAll(".navbar-nav a");
      links.forEach((w) => w.classList.remove("active"));
      e.target.classList.toggle("active");
  };
  
  const [isDark, setIsDark] = useState(false);
  const darkMode = (e) => {
    // add class 'dark' to body
    document.body.className === ""
      ? (document.body.className = "dark")
      : (document.body.className = "");

    // change button dark
    isDark ? setIsDark(false) : setIsDark(true);
  };
  // function to rmove calss 'active' from nav items

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
            <Container className="nav jusify-content-betwwen ps-0">
              <Link href="/">
                <Nav.Link href="/">
                  <Navbar.Brand className="logo fs-3 fs-md-3 ">
                    <span>A</span>hmed <span>K</span>haled
                  </Navbar.Brand>
                </Nav.Link>
              </Link>
              <Nav className="links d-flex flex-row text-uppercase">
                <Link href="/">
                  <a
                    className="ms-4 active"
                    onClick={(e) => removeClassActive(e)}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/portfolio">
                  <Nav.Link
                    className="ms-4"
                    href="/portfolio"
                    onClick={(e) => removeClassActive(e)}
                  >
                    Portfolio
                  </Nav.Link>
                </Link>
                <Link href="contact">
                  <Nav.Link
                    className="ms-4"
                    href="contact"
                    onClick={(e) => removeClassActive(e)}
                  >
                    Contact
                  </Nav.Link>
                </Link>
                <Link href="about">
                  <Nav.Link
                    className="ms-4"
                    href="about"
                    onClick={(e) => removeClassActive(e)}
                  >
                    About
                  </Nav.Link>
                </Link>
                <button
                  className="bg-transparent border-0 mx-2"
                  onClick={(e) => darkMode(e)}
                >
                  {isDark ? (
                    <SunFill className="text-white fs-5" />
                  ) : (
                    <MoonFill />
                  )}
                </button>

                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </Nav>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                ref={offCanvasRef}
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
                    <Link href="/">
                      <Nav.Link href="/" onClick={closeOffCanvas}>
                        Home
                      </Nav.Link>
                    </Link>
                    <Link href="/portfolio">
                      <Nav.Link href="/portfolio" onClick={closeOffCanvas}>
                        Portfolio
                      </Nav.Link>
                    </Link>
                    <Link href="contact">
                      <Nav.Link href="contact" onClick={closeOffCanvas}>
                        Contact
                      </Nav.Link>
                    </Link>
                    <Link href="about">
                      <Nav.Link href="about" onClick={closeOffCanvas}>
                        About
                      </Nav.Link>
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </>
  );
};

export default memo(NavBar);
