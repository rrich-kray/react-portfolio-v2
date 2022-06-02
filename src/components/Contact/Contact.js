import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-left-container">
        <h1 style={{ color: "white", textAlign: "center" }}>Contact</h1>
      </div>
      <div id="contact-right-container">
        <form id="form">
          <input id="first-name" placeholder="first-name"></input>
          <input id="last-name" placeholder="last-name"></input>
          <input id="subject" placeholder="Subject"></input>
          <input id="message" placeholder="Message"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
