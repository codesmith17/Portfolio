import React, { useState, useEffect } from "react";
import webDev from "../../assets/images/icon-dev.svg";
import leet from "../../assets/images/leetcode.svg";
// const [leetcodeRating, setLeetcodeRating] = useState(null);
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
import instyle from "../../assets/images/instyle.png";
import give_hope from "../../assets/images/give_hope.png";
import rashmi from "../../assets/images/rashmi.png";
const Article1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
                  1.5 years, my current LeetCode rating is 1950 with a Knight
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
                  <p></p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
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
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-3.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Emily evans
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
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./assets/images/avatar-4.png"
                    alt="Henry william"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Henry william
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
            </li>
          </ul>
        </section>

        {/* <!--- testimonials modal--> */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
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

              <time datetime="2021-06-14">14 June, 2021</time>

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
