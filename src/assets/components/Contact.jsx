import React from "react";
import Map from "./Map";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <article class="contact" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <Map></Map>
        </figure>
      </section>

      <section class="contact-form">
        <h3 class="h3 form-title">Contact Form</h3>

        <form action="#" class="form" data-form>
          <div class="input-wrapper">
            <input
              type="text"
              name="fullname"
              class="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button class="form-btn" type="submit" disabled data-form-btn>
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
