/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
// bootstrap Component
import { Container, Row } from "react-bootstrap";
// your image
import personalImg from "../public/images/personal.webp";
// library for animation on scroll
import Aos from "aos";
// bootstrap  icons
import {
  Award,
  Person,
  GeoAlt,
  Bank,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";
// 3 icons image
import react from "../public/images/react.png";
import next from "../public/images/next.svg";
import js from "../public/images/js.png";
export default function About() {
  // start Animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // end Animation

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
      </Head>
      <section className="about py-4 ">
        <div className="section-title text-center text-uppercase">
          <p className="fs-5 main-color">CREATIVE</p>
          <h2 className="d-flex justify-content-center align-items-center fs-1 fw-bold my-5">
            About Me
          </h2>
        </div>
        <Container className="d-flex about-content flex-column-reverse flex-lg-row ">
          <Row>
            <div className="text text-white col-md-6 lh-lg fs-5 fs-md-1 me-0 ">
              <h2 className="fw-bold text-uppercase main-color">
                hi i'm Ahmed Khaled
              </h2>
              <h3 className="fs-5 fw-bold main-color">
                - Front End Developer -
              </h3>
              <p className="about-me fs-6 fw-normal ">
                Junior Web Developer specializing in front end development.
                Experienced with all stages of the development cycle for dynamic
                web projects. Well-versed in numerous programming languages
                including HTML5, CSS, JavaScript
              </p>
              <div className="fw-bold text-capitalize">
                <p className="d-flex align-items-center mb-1 ">
                  <GeoAlt className="me-2 main-color" /> i'm from Giza, Egypt
                </p>
                <p className="d-flex align-items-center mb-1 ">
                  <Bank className="me-2 main-color" />
                  Faculty of Commerce
                </p>
                <p className="d-flex align-items-center mb-1 ">
                  <Person className="me-2 main-color" />
                  25 years old
                </p>
                <p className="d-flex align-items-center text-lowercase  mb-1">
                  <Envelope className="me-2 main-color" />
                  ahmedboboos4@gmail
                </p>
                <p className="d-flex align-items-center">
                  {" "}
                  <Telephone className="d-flex align-items-center me-2 main-color" />
                  01156420479
                </p>
              </div>
            </div>
            <div
              className="img col-md-6 d-flex justify-content-center align-items-center ms-0 "
              data-aos="fade-down"
            >
              <Image src={personalImg} width="450" height="450" />
            </div>
          </Row>
        </Container>
        <div className="skills container py-4">
          <h2 className="text-uppercase text-center fw-bold mt-1 ms-md-4">
            i'm good in
          </h2>
          <div className="row my-technology text-white p-4 d-flex justify-content-center align-items-center text-capitalize text-center">
            <span
              className="box p-4 mt-2 ms-0 ms-md-3 col-md-5"
              data-aos="zoom-in"
            >
              <div>
                <span className="d-flex align-items-center mt-1">
                  {" "}
                  <Image src={react} width="20" height="20" />
                  <p className="ms-2 my-0 align-items-center">react</p>
                </span>
                <span className="d-flex align-items-center my-3">
                  {" "}
                  <Image src={next} width="17" height="17" />
                  <p className="ms-2 my-0 align-items-center">next.js</p>
                </span>
                <span className="d-flex align-items-center mt-3 mb-2">
                  {" "}
                  <Image src={js} width="20" height="20" />
                  <p className="ms-2 my-0 align-items-center">javascript</p>
                </span>
              </div>
            </span>
            <span
              className="box p-4 mt-2 ms-0 ms-md-3 col-md-5"
              data-aos="zoom-in"
            >
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>Front-End Developer </p>
              </div>
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>HTML/Css/Javascript</p>
              </div>
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>SEO</p>
              </div>
            </span>
            <span
              className="box p-4 mt-2 mt-md-2 ms-0 ms-md-3 col-md-5"
              data-aos="fade-up"
            >
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>Arabic / English</p>
              </div>
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>social media marketing</p>
              </div>
              <div className="d-flex flex-row">
                <Award className=" fs-3 fw-bolder" />
                <p>web developer</p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
