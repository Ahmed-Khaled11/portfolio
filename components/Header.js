/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
// bootstrap Component
import { Container, Nav } from "react-bootstrap";
// bootstrap icons
import {
  Facebook,
  Instagram,
  Github,
  Twitter,
  Globe,
  Clock,
} from "react-bootstrap-icons";
import Image from "next/image";
// your image
import personalImg from "../public/images/personal.webp";
import Link from "next/link";
// library for animation on scroll
import Aos from "aos";

export default function Header() {
  // start Animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // end Animation
  // add class 'active' to portfolio navlink
  const portfolioActive = () => {
    const home = document.querySelectorAll(".links a")[0];
    const portfolio = document.querySelectorAll(".links a")[1];
    home.classList.remove("active");
    portfolio.classList.add("active");
  };
  return (
    <>
      <header className="d-flex justify-content-center align-items-center py-4">
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
                hi! i'm <span>Ahmed</span>
              </h1>
              <br />
              <h3 className="mb-3">
                <span>front-end</span> web developer
              </h3>
              <p className="fs-5">
                i'm 25 years old ,the technology i use :
                <br />
                <span>
                  Html, css, js, react , next.js, Redux-toolkit ,
                  react-bootstrap{" "}
                </span>{" "}
              </p>
              <div className="d-flex align-items-center flex-column flex-md-row">
                <Link href="/portfolio">
                  <Nav.Link
                    className="btn btn-portfolio rounded text-nowrap d-flex align-items-center mb-3 text-white"
                    href="/portfolio"
                    onClick={portfolioActive}
                  >
                    explore my portfolio <Globe className="fs-3 ps-1" />
                  </Nav.Link>
                </Link>
                <Link href="/">
                  <Nav.Link
                    className="btn btn-cv rounded text-nowrap d-flex align-items-center ms-0 ms-md-3 mb-3 text-white"
                    href="https://drive.google.com/file/d/1Ww3Vr0KhSztaSoRU0jEG0tFLBMqiihEy/view?usp=sharing"
                      target="_blank"
                  >
                    download cv <Clock className="fs-3 ps-1" />
                  </Nav.Link>
                </Link>
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
                  href="https://www.instagram.com/ahmed_khaled_01"
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
            <Image
              src={personalImg}
              width="450"
              height="450"
              alt="header"
              data-aos="fade-down"
              className="fluid rounded-circle"
            />
          </div>
        </Container>
      </header>
    </>
  );
}
