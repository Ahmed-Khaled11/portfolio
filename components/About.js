/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import aboutImg from '../public/images/about.jpg'
import Aos from "aos";
import { Award, Person, GeoAlt, GenderMale,Bank, Envelope, Telephone } from "react-bootstrap-icons";
import react from '../public/images/react.png'
import next from '../public/images/next.svg'
import js from '../public/images/js.png'
export default function About() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
  

  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me" />
      </Head>
      <section className="about py-3 ">
        <div className="section-title text-center text-uppercase">
          <p className="fs-5 main-color">CREATIVE</p>
          <h2 className="d-flex justify-content-center align-items-center fs-1 fw-bold my-5">
            About Me
          </h2>
        </div>
        <Container className="d-flex about-content flex-column-reverse flex-lg-row">
<<<<<<< HEAD
          <div className="text text-white col-md-6 lh-lg fs-5 fs-md-1 me-0 me-md-3">
            <h2 className="fw-bold text-uppercase main-color">
              hi i'm ahmed khaled
            </h2>
            <h3 className="fs-5 fw-bold main-color">- Front End Developer -</h3>
            <p className="about-me fs-6 fw-normal ">
              Junior Web Developer specializing in front end development.
              Experienced with all stages of the development cycle for dynamic
              web projects. Well-versed in numerous programming languages
              including HTML5, CSS, JavaScript
            </p>
            <div className="fw-bold text-capitalize">
              <p className="d-flex align-items-center mb-1 ">
                <GeoAlt className="me-2 main-color" /> i'm from giza, egypt
              </p>
              <p className="d-flex align-items-center mb-1 ">
                <Bank className="me-2 main-color" />
                Faculty of Commerce
              </p>
              <p className="d-flex align-items-center mb-1 ">
                <Person className="me-2 main-color" />
                23 years old
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
=======
          <div
            className="text text-white col-md-6 lh-lg fs-5 fs-md-1"
            data-aos="zoom-in"
          >
            <h2 className="fw-bold text-uppercase">hi i'm ahmed khaled</h2>
            <h4 className="fw-bold text-capitalize">
              23 years old <br /> i'm from giza, egypt <br />
              email:
              <br />{" "}
              <span className="fs-5 fw-normal">ahmedboboos4@gmail.com</span>
              <br />
              phone number:
              <br />
              <span className="fs-5 fw-normal">01068386346</span>
              <br />
            </h4>
            <p></p>

            <ul className="text-capitalize p-2">
              <li>technology i use: </li>
              <li>redux-toolkit</li>
              <li>bootstrap</li>
              <li>react JS</li>
              <li>next.js</li>
            </ul>
>>>>>>> 2062c1467cd5a22c4cb47d681ddf388f377c8155
          </div>
          <div className="img col-md-6  ms-0 ms-md-3" data-aos="fade-down">
            <Image src={aboutImg} width="450" height="450" />
          </div>
        </Container>
        <div className="skills container py-4">
          <h2 className="text-uppercase text-center fw-bold mt-1 ms-md-4">
            technology i use
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
