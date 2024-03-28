import React, { useState, useEffect } from "react";
import webDev from "../../assets/images/icon-dev.svg";
import { IoCloseOutline } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import aditya from "../../assets/images/aditya.png";
import leet from "../../assets/images/leetcode.svg";
import knight from "../../assets/images/Knight.gif";
import dec from "../../assets/images/2023-11.gif";
import nov from "../../assets/images/2023-12.gif";
import hundred from "../../assets/images/hundred.gif";
import fifty from "../../assets/images/fifty.gif";
import html from "../../assets/images/html-5.svg";
import js from "../../assets/images/js.svg";
import css from "../../assets/images/css.svg";
import mongodb from "../../assets/images/mongodb.svg";
import mysql from "../../assets/images/mysql (2).svg";
import react from "../../assets/images/react.svg";
import express from "../../assets/images/express (2).svg";
import java from "../../assets/images/java-icon.svg";
import php from "../../assets/images/php.svg";
import ayush from "../../assets/images/ayush_kushwaha.png";
import instyle from "../../assets/images/instyle.png";
import give_hope from "../../assets/images/give_hope.png";
import rashmi from "../../assets/images/rashmi.png";
const Article1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    ("use strict");

    // element toggle function
    const elementToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };

    // sidebar variables
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // sidebar toggle functionality for mobile
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });

    // testimonials variables
    const testimonialsItem = document.querySelectorAll(
      "[data-testimonials-item]"
    );
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    // modal variable
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    // modal toggle function
    const testimonialsModalFunc = function () {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    // add click event to all modal items
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector(
          "[data-testimonials-title]"
        ).innerHTML;
        modalText.innerHTML = this.querySelector(
          "[data-testimonials-text]"
        ).innerHTML;

        testimonialsModalFunc();
      });
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);

    // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
      for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
          filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
          console.log(filterItems[i].dataset.category);
          filterItems[i].classList.add("active");
        } else {
          filterItems[i].classList.remove("active");
        }
      }
    };

    // add event in all filter button items for large screen
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }

    // contact form variables
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }

    // page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        }
      });
    }

    document.addEventListener("DOMContentLoaded", function (event) {
      // array with texts to type in typewriter
      var dataText = [
        "Utrecht.",
        "Full Service.",
        "Webdevelopment.",
        "Wij zijn Codefield!",
      ];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
          // add next character to h1
          document.querySelector("h1").innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function () {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == "function") {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
          setTimeout(function () {
            StartTextAnimation(0);
          }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function () {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title typing-text " id="text-container">
            About me
          </h2>
        </header>

        <section className="about-text ">
          <p>
            I'm Krishna Tripathi from Indian Institute of Information Technology
            Nagpur, a PreFinal (3rd year) with great interest in web development
            . I enjoy turning complex problems into simple, beautiful and
            intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. Also at the same time it's fully efficient
            webiste.
          </p>
        </section>

        {/* service */}

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            {/* <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="../../assets/components/images/my-avatar.png"
                  alt="design icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li> */}

            <li className="service-item">
              <div className="service-icon-box">
                <img src={webDev} alt="Web development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional level. A
                  Professional MERN stack developer, with expertise in React.js.
                </p>
                <div
                  className="slider-container"
                  style={{
                    marginTop: "auto auto",
                    overflowX: "auto",
                    display: "flex",
                    flexDirection: "row",
                    maxWidth: "100%",
                  }}
                >
                  {" "}
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={express}
                    alt="express GIF"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={react}
                    alt="react GIF"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={html}
                    alt="html pic"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={js}
                    alt="js pic"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={css}
                    alt="css pic"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={mysql}
                    alt="mysql GIF"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={mongodb}
                    alt="mongodb GIF"
                  />
                </div>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <a
                  target="_blank"
                  href="https://www.leetcode.com/krishna170902"
                >
                  <img src={leet} alt="leetcode icon" width="40" />
                </a>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Leetcode</h4>
                <p
                  className="service-item-text"
                  style={{ fontSize: "13px", lineHeight: "1.5" }}
                >
                  With super keen interest in data structures and algorithms and
                  having been actively participating in LeetCode for the past
                  1.5 years, my current LeetCode rating is 2004 with a Knight
                  ranking.
                </p>{" "}
                <div
                  className="slider-container"
                  style={{
                    overflowX: "auto",
                    display: "flex",
                    flexDirection: "row",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={knight}
                    alt="knight pic"
                  />

                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={dec}
                    alt="dec pic"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={nov}
                    alt="nov GIF"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={hundred}
                    alt="hundred GIF"
                  />
                  <img
                    style={{
                      flex: "0 0 auto",
                      width: "24%",
                      margin: "10px",
                    }}
                    src={fifty}
                    alt="fifty GIF"
                  />
                </div>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={php} alt="leetcode icon" width="80" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Leetcode</h4>
                <p
                  className="service-item-text"
                  style={{ fontSize: "13px", lineHeight: "1.5" }}
                >
                  With almost one year of experience in PHP and database
                  programming, struggling throught mistakes and lot of work
                  hours spent here, hence made couple of minor and some major
                  PHP,MYSQL projects.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img src={java} alt="java icon" width="60" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Java Development</h4>

                <p className="service-item-text">
                  I am deeply passionate about developing and designing
                  large-scale Java-based desktop applications.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* <!--- testimonials--> */}

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={rashmi}
                    alt="Rashmi"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Rashmi Mantri
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Krishna Tripathi is a web development maestro, excelling in
                    competitive programming, DSA, and backend wizardry. Their
                    expertise is unparalleled, making collaboration a seamless
                    and enriching experience. Highly recommended!
                  </p>
                </div>
              </div>
            </li>

            {/* <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Jessica miller
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li> */}

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={ayush}
                    alt="Ayush Kushwaha"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Ayush Kushwaha
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Exceptional web developer; Transforms visions in to
                    stunning, functional online realities.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={aditya}
                    alt="Aditya Deshpande"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Aditya Deshpande
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Krishna Tripathi is a force of nature in web development
                    with an extensive knowledge in Competitive Programming and
                    DSA. His social and coding skills make working with him a
                    magical experience.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* <!--- testimonials modal--> */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <IoCloseOutline />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./assets/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time datetime="2021-06-14">27 January, 2024</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* clients */}

        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="https://instyle-interiors.vercel.app/#">
                <img src={instyle} alt="client logo" width={"50%"} />
              </a>
            </li>

            <li className="clients-item">
              <a href="https://www.givehopef.org/">
                <img src={give_hope} alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Article1;
