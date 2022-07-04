/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// bootstrap Component
import { Container } from 'react-bootstrap'

import {
    HeartFill
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="text-white p-3">
      <Container>
        <p className="copy-right text-center m-0">
          &copy;2022 john doe - personal portfolio made with
          <HeartFill className="ms-1" style={{ color: "red" }} />
        </p>
      </Container>
    </footer>
  );
}
