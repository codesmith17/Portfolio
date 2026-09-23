import React from "react";
import { IoBook, IoDocumentText, IoBookOutline } from "react-icons/io5";

const ArticleResume = () => {
  const resumeLink =
    "https://github.com/codesmith17/resume/raw/main/resume.pdf";

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
              Indian Institute of Information Technology, Nagpur
            </h4>
            <span>Dec 2021 — May 2025</span>
            <p className="timeline-text">
              Bachelor of Technology in Computer Science and Engineering
            </p>
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
              Software Engineer I at Yugabyte
            </h4>
            <span>Sept 2025 — Present</span>
            <p className="timeline-text">
              Engineered Meko knowledge base uploads across 3 services using React, Go, and Python with presigned S3 POST requests, enforcing storage edge checks for file size, type, and content spoofing.<br />
              Built Meko's memory retrieval observability and promotion flow with top-k retrieval, reducing input token usage by 35% for marketing and lead generation workflows.<br />
              Delivered AWS Cognito authentication across 3 identity providers (Google, LinkedIn, GitHub), supporting profile completion, identity linking, invite, logout, and federated account flows.<br />
              Contributed 2 YugabyteDB integrations to LangChain4j (embedding storage, chat memory) with HNSW and hybrid search, metadata filters, and Java Testcontainers coverage via a merged upstream commit.<br />
              Developed a database migration validator for schema version and dirty-state health signals, blocking invalid migrations before merge.<br />
              Built a Go failure notification service adopted by 4 YugabyteDB teams, centralizing automated Slack alerts.<br />
              Automated a Go analytics pipeline across Scarf, GCS, BigQuery, MadKudu, and Salesforce for lead scoring and CRM sync.<br />
              Implemented the end-to-end YB Voyager workflow in the yugabyted UI across assessment, schema, data, and cutover stages.<br />
              <strong>Techstack:</strong> Go, React, Python, FastAPI, LangChain4j, AWS, BigQuery.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer Intern at Yugabyte
            </h4>
            <span>Sept 2024 — Aug 2025</span>
            <p className="timeline-text">
              Received Best Use of AI recognition at the YugabyteDB internal hackathon for YB Voyager Copilot.<br />
              <strong>Techstack:</strong> Go, ReactTS, TypeScript, MaterialUI, Java, Node.js, MongoDB.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer Intern at Zluri
            </h4>
            <span>Aug 2024 — Sept 2024</span>
            <p className="timeline-text">
              Resolved 13+ production bugs in JavaScript/Node.js and MongoDB. Built QA dashboards and a testing framework, increasing coverage by 20% and query performance by 30%.<br />
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
              <h5 className="h5">Backend &amp; Microservices (Go, Node.js, FastAPI)</h5>
              <data value="95">95%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "95%" }}></div>
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
              <h5 className="h5">Frontend Development (React, Next.js)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">AI/LLM Systems (LangGraph, MCP, RAG)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Databases (YugabyteDB, PostgreSQL, MongoDB, pgvector)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Cloud &amp; DevOps (AWS, GCP, Docker, GitHub Actions)</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Competitive Programming (Guardian, LeetCode)</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>
        </ul>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Achievements</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Best Use of AI — YugabyteDB Internal Hackathon
            </h4>
            <p className="timeline-text">
              Recognized for YB Voyager Copilot, an AI-powered database migration assistant.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Guardian, LeetCode (max rating 2145)
            </h4>
            <p className="timeline-text">
              4-star on CodeChef (rating 1944) and Specialist on Codeforces (max rating 1484).
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              3rd Place, Algorithmia — Tantrafiesta 2023
            </h4>
            <p className="timeline-text"></p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Open Source Contributions</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              <a
                href="https://github.com/langchain4j/langchain4j/pull/3852"
                target="_blank"
                rel="noopener noreferrer"
              >
                langchain4j — YugabyteDB Embedding Store Integration
              </a>
            </h4>
            <p className="timeline-text">
              Added embedding storage with HNSW and hybrid search, metadata filters, and Java Testcontainers coverage. Merged upstream.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              <a
                href="https://github.com/yugabyte/yugabyte-db/pull/29496"
                target="_blank"
                rel="noopener noreferrer"
              >
                yugabyte-db — Sequelize Smart Driver Documentation
              </a>
            </h4>
            <p className="timeline-text">
              Documented YugabyteDB smart driver features for Sequelize ORM users. Merged.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              <a
                href="https://github.com/YugabyteDB-Samples/orm-examples/pull/119"
                target="_blank"
                rel="noopener noreferrer"
              >
                orm-examples — Improved Load Balancing Setup
              </a>
            </h4>
            <p className="timeline-text">Merged.</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              <a
                href="https://github.com/yugabyte/langfuse"
                target="_blank"
                rel="noopener noreferrer"
              >
                yugabyte/langfuse — Multiple Merged PRs
              </a>
            </h4>
            <p className="timeline-text">
              Fixed public traces on Postgres reads, removed ClickHouse boot requirement for local YB setups, and cleaned up local-build tooling.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default ArticleResume;