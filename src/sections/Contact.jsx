import React from "react";
import emailjs from "emailjs-com";
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const _FORM = process.env.REACT_APP_EMAIL_FORM;

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, _FORM).then(
      (result) => {
        alert("Your Message Has Been sent");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-top">
        <p className="contact-header">Contact Me</p>
        <p className="contact-preview">
          Feel Free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <form className="email_form" onSubmit={sendEmail}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          placeholder="E.g, John"
          name="first-name"
          required
        ></input>

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          placeholder="E.g., Cena"
          name="last-name"
          required
        ></input>

        <label htmlFor="_email">Email</label>
        <input
          type="email"
          id="_email"
          placeholder="E.g., customer@gmail.com"
          name="email"
          required
        ></input>

        <label htmlFor="phone_number">Phone #</label>
        <input
          type="tel"
          id="phone_number"
          placeholder="E.g.,111-222-3333"
          name="phone_number"
          required
        ></input>

        <label htmlFor="emessage">Message</label>
        <textarea
          type="message"
          rows="5"
          id="emessage"
          placeholder="Enter Message ..."
          name="emessage"
          required
        ></textarea>
        <br />

        <input type="submit" value="Send" id="send_email" />
      </form>
    </div>
  );
}

export default Contact;
