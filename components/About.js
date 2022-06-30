/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import aboutImg from '../public/images/about.jpg'
import Aos from "aos";

export default function About() {
    useEffect(() => {
      Aos.init({ duration: 1500 });
    }, []);
  return (
    <div>
      <Head>
        <title>About me</title>
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
            <h4 className="fw-bold text-uppercase">i'm 23 years old</h4>
            <ul className="text-capitalize p-2">
              <li>developed Front-End websites</li>
              <li>technology i using is : </li>
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
      </section>
    </div>
  );
}
