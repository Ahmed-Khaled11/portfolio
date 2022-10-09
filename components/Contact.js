/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head';
import React, { Component, useEffect, useRef } from "react";
// bootstrap Component
import { Button, Container, Form } from 'react-bootstrap'
// bootstrap icons
import { Envelope, Messenger, Whatsapp } from "react-bootstrap-icons";
//library emailjs for Contact form 
import emailjs from 'emailjs-com'
// if message sent successfully pop up toast message 
import { ToastContainer, toast } from "react-toastify";
// library for animation on scroll 
import Aos from "aos";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // start Animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // end Animation
  // emailjs for form contact
  const form = useRef();
  const button = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    button.current.classList.add("disabled");
    emailjs
      .sendForm(
        "service_k43l6bq",
        "template_usxoe54",
        form.current,
        "4fLtkO678K6kvw4HI"
      )
      .then(
        () => {
          // pop up message if message sent Successfully
          toast.success(`Message Sent Successfully`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          button.current.classList.remove("disabled");
        },
        (error) => {
          console.log(error.text);
          button.current.classList.remove("disabled");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact me" />
        <link rel="icon" href="/public/images/icon.png" />
      </Head>
      <section className="contact py-4">
        <div className="section-title text-center text-uppercase">
          <p className="fs-5">CREATIVE</p>
          <h2 className="d-flex justify-content-center align-items-center fs-1 fw-bold my-5">
            contact me
          </h2>
        </div>

        <Container className="d-md-flex justify-content-between">
          <div className="social col-md-5 d-flex flex-column text-center mt-4">
            <article
              className="contact_option p-4 mb-1 mb-md-2 "
              data-aos="fade-right"
            >
              <Envelope />
              <h3>Email</h3>
              <p>ahmedboboos4@gmail</p>
              <a
                className="main-color"
                href="mailto:ahmedboboos4@gmail.com"
                target="_blank"
              >
                Send A Messsage
              </a>
            </article>
            <article
              className="contact_option p-4 mt-2 mt-md-3"
              data-aos="zoom-in"
            >
              <Messenger />
              <h3>Messenger</h3>
              <p>Ahmed Khaled</p>
              <a
                className="main-color"
                href="https://m.me/ahmed.khaled.2898"
                target="_blank"
              >
                Send A Messsage
              </a>
            </article>
            <article
              className="contact_option p-4 mt-2 mt-md-3"
              data-aos="fade-right"
            >
              <Whatsapp />
              <h3>WhatsApp</h3>
              <p>01156420479</p>
              <a
                className="main-color"
                href="https://wa.me/2001156420479"
                target="_blank"
              >
                Send A Messsage
              </a>
            </article>
          </div>
          <div className="col-md-6 mt-4">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="mb-1 mb-md-3 mt-4 mt-md-0"
                />
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="mb-1 mb-md-3"
                />
                <textarea
                  name="message"
                  rows="9"
                  placeholder="Your Message"
                  width="300"
                  height="150"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="bg-main border-0 mt-1"
                onSubmit={sendEmail}
                ref={button}
              >
                Send
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
}
