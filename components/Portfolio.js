/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'

import { Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import Head from "next/head";
import { projects } from '../projects'; 
import Image from 'next/image'
import { Nav } from "react-bootstrap";
import {Eye} from "react-bootstrap-icons";
import Aos from 'aos'
export default function Portfolio() {
// start Animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // end Animation
  const [filterProject, setFilterProject] = useState(projects);
  // filter the projects on click
  const filterProjects = (e) => {
    setFilterProject(
      projects.filter(
        (project) => project.technology == e.target.dataset.filter
      )
    );

    // if click all Button return all projects
    e.target.dataset.filter === "all" ? setFilterProject(projects) : "";

    // add class 'active' on click item in navbar
    let activeElement = document.querySelectorAll(".all-projects button");
    activeElement.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <link rel="icon" href="/public/images/icon.png" />
      </Head>
      <section className="portfolio py-4">
        <Container>
          <div className="section-title text-center text-uppercase">
            <p className="fs-5">CREATIVE</p>
            <h2 className="d-flex justify-content-center align-items-center fs-1 fw-bold my-5">
              my portfolio
            </h2>
            <ButtonGroup className="all-projects my-5">
              <Button
                className="active mx-1"
                data-filter="all"
                onClick={(e) => filterProjects(e)}
              >
                All
              </Button>
              <Button
                className="ms-1"
                onClick={(e) => filterProjects(e)}
                data-filter="next"
              >
                React & Next.js
              </Button>
              <Button
                className="ms-1"
                data-filter="html"
                onClick={(e) => filterProjects(e)}
              >
                Html & Css
              </Button>
              <Button
                className="ms-1"
                data-filter="bootstrap"
                onClick={(e) => filterProjects(e)}
              >
                Bootstrap
              </Button>

              <Button
                className="ms-1"
                data-filter="game"
                onClick={(e) => filterProjects(e)}
              >
                Games
              </Button>
            </ButtonGroup>
          </div>
          <Row>
            {filterProject.map(({ id, title, img, url, aos }) => (
              <div key={id} data-aos={aos} className="col-md-3">
                <div className="box my-2 d-flex justify-content-center align-items-center">
                  <Image
                    src={img}
                    width="350"
                    height="350"
                    className="w-100"  
                  />
                  <p
                    className="theTitle text-uppercase w-100 text-center
                   py-1 px-3 text-white fw-bold"
                  >
                    
                    {title}
                  </p>
                  <Nav.Link
                    href={url}
                    target="_blank"
                    className="title btn rounded shadow-none text-uppercase d-flex align-items-center"
                  >
                    Live Preview <Eye className="ps-1 fs-4" />
                  </Nav.Link>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
