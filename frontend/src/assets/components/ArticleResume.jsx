import React from "react";
import { IoBook, IoDocumentText, IoBookOutline } from "react-icons/io5";

const ArticleResume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1nsZ3AZL6AAIDlm9uPim-FQPX-FChz7Em/view?usp=drive_link";

  return (
    <article className="resume" data-page="resume">
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

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBook />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Indian Institute of Information Technology Nagpur
            </h4>
            <span>2021 — 2025</span>
            <p className="timeline-text"></p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Delhi Public School Vadodara</h4>
            <span>2016 — 2020</span>
            <p className="timeline-text"></p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Don Bosco High School Vadodara
            </h4>
            <span>2006 — 2016</span>
            <p className="timeline-text"></p>
          </li>




        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer Intern at YugabyteDB
            </h4>
            <span>Sept 2024 — Present</span>
            <p className="timeline-text">
              Enhanced the analysis and assessment page by adding tooltips and updating headings, improving user interface clarity and reducing user feedback time by 15%.<br />
              Implemented the Analysis History feature by modifying <code>migrateSchemaTaskInfo</code>, enabling detailed schema migration tracking and improving traceability by 30%.<br />
              Built and deployed XCluster backend services and UI, improving data availability, system resiliency by 40%, and reducing cross-cluster setup time by 35%.<br />
              Developed tests for YB Voyager, enhancing migration accuracy and reducing bug occurrences in workflows by 20%.<br />
              <strong>Techstack:</strong> Go, ReactTS, TypeScript, MaterialUI, Java, Node.js, MongoDB.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer Intern at Zluri
            </h4>
            <span>Jul 2024 — Aug 2024</span>
            <p className="timeline-text">
              Resolved 13+ bugs (Jira tickets) related to custom filter logic by integrating MongoDB queries, improving filtering accuracy and system reliability.<br />
              Corrected middleware logic in Node.js, ensuring accurate data handling and improved backend API performance.<br />
              <strong>Techstack:</strong> MongoDB, ExpressJS, ReactJS, NodeJS.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer (Freelancer) at New Hope Foundation Nagpur
            </h4>
            <span>April 2023 — May 2023</span>
            <p className="timeline-text">
              Collaborated with a team to integrate a content management system (CMS) for easy updates and maintenance, with 25+ donations.<br />
              Optimized website performance and ensured cross-browser compatibility.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Web Developer (Freelancer) at Instyle Interiors
            </h4>
            <span>Jan 2023 — Feb 2023</span>
            <p className="timeline-text">
              Developed and deployed a responsive website showcasing interior design projects.<br />
              Implemented contact forms and gallery features to improve user engagement.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Development using MERN stack</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data Structures and Algorithms</h5>
              <data value="100">100%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "100%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "95%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "95%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Competetive Programming</h5>
              <data value="60">60%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">PHP MYSQL</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Python Development</h5>
              <data value="60">60%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ArticleResume;