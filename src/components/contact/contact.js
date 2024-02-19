import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Card from "../cryptonet_assign/card";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm("service_uxmkmdd", "template_lnra2ps", form.current, {
        publicKey: "b7Dr03d895IxBCywG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contact-container container">
      <h1>Get in touch</h1>
      <form ref={form} onSubmit={sendEmail} autoComplete="off">
        <input
          // className="boxShadow"
          type="text"
          name="from_name"
          placeholder="Name"
          required
        />
        <input
          // className="boxShadow"
          type="email"
          name="from_user_email"
          placeholder="Email"
          required
        />
        <textarea
          // className="boxShadow"
          name="message"
          placeholder="Message"
          required
        />
        <button className=" btn btn-primary" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
