import React from "react";
// import { IoBook } from "react-icons/io5";
import { IoBook, IoDocumentText, IoBookOutline } from "react-icons/io5";
const ArticleResume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1nsZ3AZL6AAIDlm9uPim-FQPX-FChz7Em/view?usp=drive_link";
  return (
    <article class="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <IoDocumentText /> View Full Resume
        </a>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <IoBook />
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Don Bosco High School Vadodara
            </h4>

            <span>2006 — 2016</span>

            <p class="timeline-text"></p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Delhi Public School Vadodara</h4>

            <span>2016 — 2020</span>

            <p class="timeline-text"></p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Indian Institute of Information Technology Nagpur
            </h4>

            <span>2021 — 2025</span>

            <p class="timeline-text"></p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <IoBookOutline />
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Web Developer (Freelancer) at New Hope Foundation Nagpur
            </h4>

            <span>April 2023 — May 2023</span>

            <p class="timeline-text">
              Collaborated with a team to integrate a content management system
              (CMS) for easy updates and maintenance, with 25+
              donations.Optimized website performance and ensured cross-browser
              compatibility.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Web Developer (Freelancer) at Instyle Interiors{" "}
            </h4>

            <span>Jan 2023- Feb 2023</span>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web Development using MERN stack</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Data Structures and Algorithms</h5>
              <data value="100">100%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "100%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Frontend Development</h5>
              <data value="95">95%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "95%" }}></div>
            </div>
          </li>
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Backend Development</h5>
              <data value="95">95%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "95%" }}></div>
            </div>
          </li>
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Competetive Programming</h5>
              <data value="60">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">PHP MYSQL</h5>
              <data value="50">90%</data>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Python Development</h5>
              <data value="60">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ArticleResume;
