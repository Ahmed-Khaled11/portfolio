/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head';
import React, { useEffect, useRef } from "react";
import { Button, Container, Form } from 'react-bootstrap'
import { Envelope, Messenger, Whatsapp } from "react-bootstrap-icons";
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from "react-toastify";
import Aos from "aos";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);


    const form = useRef();
    const sendEmail = (e) => {

            e.preventDefault();
            emailjs
            .sendForm(
            "service_q409abd",
            "template_cafd47k",
            form.current,
            "gn-_qIeHcwk9Q4clD"
        )
        
            
        .then(
            (result) => {
                toast.success(`Message Sent Successfully`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        },
        (error) => {
            console.log(error.text);
        }
        );

        e.target.reset();
      };

    return (
      <>
        <Head>
          <title>Contact Me</title>
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
                className="contact_option p-4 mb-2 mb-md-3 "
                data-aos="fade-right"
              >
                <Envelope />
                <h3>Email</h3>
                <p>ahmedboboos4@gmail.com</p>
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
                    rows="7"
                    placeholder="Your Message"
                    width="300"
                    height="150"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="bg-main border-0"
                  onSubmit={sendEmail}
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
