import React from "react";
import { IoBook } from "react-icons/io5";
const ArticleResume = () => {
  return (
    <article class="resume" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
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

      {/* <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Creative director</h4>

            <span>2015 — Present</span>

            <p class="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section> */}

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web Development</h5>
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Data Structures and Algorithms</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
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
              <h5 class="h5">Java Development</h5>
              <data value="60">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
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
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ArticleResume;
