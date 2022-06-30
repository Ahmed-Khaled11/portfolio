/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useEffect } from 'react'
import { Container, Nav } from 'react-bootstrap'
import {
  Facebook,
  Instagram,
  Github,
  Twitter,
  Globe,
  Clock,
} from "react-bootstrap-icons";
import Image from "next/image";
import header from '../public/images/about.jpg'
import Link from "next/link";
import Aos from 'aos'
  export default function Header() {
    useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  return (
    <>
      <header className="d-flex justify-content-center align-items-center">
        <Container>
          <div
            className="d-flex justify-content-between align-items-center
          flex-column-reverse
          flex-md-row text-center
           text-md-start"
            data-aos="fade-right"
          >
            <div className="text text-uppercase">
              <h1 className="mb-4">
                hi! i'm <span>ahmed</span>
              </h1>
              <br />
              <h3 className="mb-3">
                i am an <span>front-end</span> web developer
              </h3>
              <p className="fs-5">
                i'm 23 years old ,the technology i use :
                <br />
                <span>
                  Html, css, js, react , next.js , react-bootstrap{" "}
                </span>{" "}
              </p>
              <div className="d-flex ">
                <Link href="/portfolio">
                  <Nav.Link
                    className="btn btn-portfolio rounded d-flex align-items-center mb-3 text-white"
                    href="/portfolio"
                  >
                    explore my portfolio <Globe className="fs-4 ps-1" />
                  </Nav.Link>
                </Link>
                <button className="btn btn-portfolio rounded text-uppercase fw-bold  d-flex align-items-center mb-3 ms-3 text-white">
                  download cv <Clock className="fs-3 ps-2" />
                </button>
              </div>
              <div className="icons d-flex justify-content-between justify-content-md-start">
                <Nav.Link
                  className="facebook fs-4"
                  href="https://fb.com/ahmed.khaled.2898"
                  target="_blank"
                >
                  <Facebook />
                </Nav.Link>
                <Nav.Link
                  className="instagram ms-3 fs-4"
                  href="https://www.instagram.com/ahmedkhaled7573"
                  target="_blank"
                >
                  <Instagram />
                </Nav.Link>
                <Nav.Link
                  className="github ms-3 fs-4"
                  href="https://github.com/ahmed-khaled11"
                  target="_blank"
                >
                  <Github />
                </Nav.Link>
                <Nav.Link
                  className="twitter ms-3 fs-4"
                  href="https://twitter.com/AhmedMidaa2"
                  target="_blank"
                >
                  <Twitter />
                </Nav.Link>
              </div>
            </div>
            <div className="image  mt-3 mt-md-0 mb-5 mb-md-0">
              <Image
                src={header}
                width="450"
                height="450"
                alt="header"
                data-aos="fade-down"
                className="fluid rounded-circle"
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
