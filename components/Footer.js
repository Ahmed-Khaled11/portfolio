/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap'

import {
    Facebook,
    Linkedin,
    Github,
    Twitter,
  Instagram,
    HeartFill

} from "react-bootstrap-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white p-3">
      <Container>
        <Row>
          <div className="icons d-flex  justify-content-center">
            <Nav.Link
              href="https://www.facebook.com/ahmed.khaled.2898"
              target="_blank"
            >
              <Facebook className="bg-blue text-white" />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/AhmedMidaa2" target="_blank">
              <Twitter className="bg-blue text-white" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ahmed-khaled-4b0027214"
              target="_blank"
            >
              <Linkedin className="bg-blue text-white" />
            </Nav.Link>
            <Nav.Link href="https://github.com/ahmed-khaled11" target="_blank">
              <Github className="bg-blue text-white" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/ahmedkhaled7573"
              target="_blank"
            >
              <Instagram className="bg-blue text-white" />
            </Nav.Link>
          </div>
        </Row>
        <p className="copy-right text-center m-0"
        >&copy;2022 Ahmed Khaled - personal portfolio made with 
          <HeartFill className='ms-1' style={{ color: 'red' }} />
        </p>
      </Container>
    </footer>
  );
}
