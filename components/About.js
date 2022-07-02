/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import aboutImg from '../public/images/about.jpg'
import Aos from "aos";
import { Award } from "react-bootstrap-icons";
import react from '../public/images/react.png'
import next from '../public/images/next.svg'
import js from '../public/images/js.png'
export default function About() {
    useEffect(() => {
      Aos.init({ duration: 1500 });
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
              <li>technology i using : </li>
              <li>redux-toolkit</li>
              <li>bootstrap</li>
              <li>react JS</li>
              <li>next.js</li>
            </ul>
          </div>
          <div className="img col-md-6" data-aos="fade-down">
            <Image src={aboutImg} />
          </div>
        </Container>
        <div className="skills container py-4">
          <h2 className="text-uppercase text-center fw-bold mt-1 ms-md-4">
            my experience
          </h2>
          <div className="row my-technology text-white p-4 d-flex justify-content-center align-items-center text-capitalize text-center">
            <span className="box p-4 mt-2 ms-0 ms-md-3 col-md-5">
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
            <span className="box p-4 mt-2 ms-0 ms-md-3 col-md-5">
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
            <span className="box p-4 mt-2 mt-md-2 ms-0 ms-md-3 col-md-5">
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
