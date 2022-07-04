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
        </Row>
        <p className="copy-right text-center m-0">
          &copy;2022 john doe - personal portfolio made with
          <HeartFill className="ms-1" style={{ color: "red" }} />
        </p>
      </Container>
    </footer>
  );
}
