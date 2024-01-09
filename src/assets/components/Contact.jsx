import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  return (
    <article class="contact" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0642676894254!2d79.0237998747672!3d20.9499340904823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1704709085748!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
