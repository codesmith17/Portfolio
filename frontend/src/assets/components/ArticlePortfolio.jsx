import React, { useEffect } from "react";
import todo from "../images/todo-project.jpg";
import agnihotra from "../images/agnihotra.png";
import givehope from "../images/givehope.png";
import instyle from "../images/instyle-int.png";
import codeforces from "../images/codeforces.png.png";
import { FaRegEye } from "react-icons/fa";
import codechef from "../images/codechef.jpg";
import leetcode from "../images/leetcode.png";
import piano from "../images/piano.jpg";
import errorlogs from "../images/errorlogs.png";
import railmaarg from "../images/railmaarg.jpg";
import moviereview from "../images/movie_review.png";
import booksearch from "../images/booksearch.png";
import blog from "../images/blog.png";
import yugabyteLogo from "../images/yugabyte-logo.png";
import leetcodeBadge from "../images/leetcode-badge.svg";
import perpetualCalendarScreenshot from "../images/perpetual-calendar-screenshot.png";
import perpetualCalendarDemo from "../images/perpetual-calendar-demo.mp4";

const ArticlePortfolio = () => {
  useEffect(() => {
    const filterBtn = document.querySelectorAll("[data-filter-btn]");
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const elementToggleFunc = (element) => {
      element.classList.toggle("active");
    };

    const filterFunc = (selectedValue) => {
      filterItems.forEach((item) => {
        const itemCategory = item.dataset.category.toLowerCase();
        if (selectedValue === "all" || selectedValue === itemCategory) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    select.addEventListener("click", function () {
      elementToggleFunc(this.querySelector(".select-list"));
    });

    selectItems.forEach((item) => {
      item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        select.querySelector(".select-value").innerText = selectedValue;
        elementToggleFunc(select.querySelector(".select-list"));
        filterFunc(selectedValue);
      });
    });

    filterBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        select.querySelector(".select-value").innerText = selectedValue;
        filterFunc(selectedValue);
        filterBtn.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>AI/LLM Projects</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>PHP</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn>Competitive Programming and DSA</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value">Select category</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>AI/LLM Projects</button>
            </li>
            <li className="select-item">
              <button data-select-item>PHP</button>
            </li>
            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
            <li className="select-item">
              <button data-select-item>Competitive Programming and DSA</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="ai/llm projects"
          >
            <a
              href="https://github.com/yugabyte/langchain-yugabytedb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={yugabyteLogo} alt="YB Voyager Copilot" loading="lazy" />
              </figure>
              <h3 className="project-title">
                YB Voyager Copilot: AI-Powered Database Migration Assistant
              </h3>
              <p className="project-category">
                LangGraph, FastAPI, Next.js, MCP, Docker, YugabyteDB, RAG
              </p>
            </a>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <a
                href="https://drive.google.com/file/d/1FeDoy3duOXkC9bDFbx8XYkm08n5Khysf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  padding: "4px 10px",
                  border: "1px solid var(--border-gradient-onyx, #444)",
                  borderRadius: "12px",
                  color: "var(--orange-yellow-crayola, #ffb54a)",
                  textDecoration: "none",
                }}
              >
                🎬 Demo Video
              </a>
              <a
                href="https://peach-doreen-11.tiiny.site/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  padding: "4px 10px",
                  border: "1px solid var(--border-gradient-onyx, #444)",
                  borderRadius: "12px",
                  color: "var(--orange-yellow-crayola, #ffb54a)",
                  textDecoration: "none",
                }}
              >
                🖥️ Live Demo
              </a>
              <a
                href="https://hub.docker.com/u/krishnatripathi17?page=1&search=yb-voyager-"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  padding: "4px 10px",
                  border: "1px solid var(--border-gradient-onyx, #444)",
                  borderRadius: "12px",
                  color: "var(--orange-yellow-crayola, #ffb54a)",
                  textDecoration: "none",
                }}
              >
                🐳 DockerHub
              </a>
            </div>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="ai/llm projects"
          >
            <a
              href="https://github.com/codesmith17/AGNIHOTRA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={agnihotra} alt="EternalAgni" loading="lazy" />
              </figure>
              <h3 className="project-title">
                EternalAgni: Precision Agnihotra Timing App (Android + PWA)
              </h3>
              <p className="project-category">
                Seconds-precision sunrise/sunset timing with GPS/IP location detection,
                offline-ready fallback APIs, and native Android builds via Capacitor.
                JavaScript, Capacitor, Android, PWA, Service Workers
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/MOVIE-REVIEW-APP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={moviereview} alt="CineSphere Movie Review App" loading="lazy" />
              </figure>
              <h3 className="project-title">
                CineSphere: Full-Stack Social Movie &amp; TV Review Platform
              </h3>
              <p className="project-category">
                React, Redux Toolkit, Node.js, Express, YugabyteDB, JWT Auth, TMDB API, Google Generative AI
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="competitive programming and dsa"
          >
            <a
              href="https://github.com/codesmith17/LEETCODE-REMINDER"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={leetcodeBadge} alt="LeetCode Reminder" loading="lazy" />
              </figure>
              <h3 className="project-title">
                LeetCode Reminder: Automated POTD &amp; Contest Notifications
              </h3>
              <p className="project-category">
                Node.js service using GitHub Actions cron and ntfy push notifications to
                track daily problem status, contest reminders, and weekly rating changes.
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a
              href="https://github.com/codesmith17/perpetual-calender"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure
                className="project-img"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img
                  src={perpetualCalendarScreenshot}
                  alt="Perpetual Calendar Puzzle Solver"
                  loading="lazy"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <video
                  src={perpetualCalendarDemo}
                  muted
                  loop
                  playsInline
                  preload="none"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              </figure>
              <h3 className="project-title">
                Perpetual Calendar Puzzle Solver
              </h3>
              <p className="project-category">
                A Go/WASM-powered solver for the daily calendar puzzle: pre-computes
                all valid arrangements of 8 pieces for any date and lets you browse
                every solution. Hover to see it in action.
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/blog-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={blog} alt="Blog App" loading="lazy" />
              </figure>
              <h3 className="project-title">FULL FLEDGED BLOG APP</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/ERROR_LOGS_DATABASE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={errorlogs} alt="Error Logs Database" loading="lazy" />
              </figure>
              <h3 className="project-title">
                Error Logs Database using Web development and Python
              </h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://marqee.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img
                  src={booksearch}
                  alt="Book Search Website"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">BOOK SEARCH WEBSITE</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://agnihotra-eternal-agni.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={agnihotra} alt="Advanced Todo List" loading="lazy" />
              </figure>
              <h3 className="project-title">Agnihotra Timing Website</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/ADVANCED-TODO-LIST"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={todo} alt="Advanced Todo List" loading="lazy" />
              </figure>
              <h3 className="project-title">
                An ADVANCED TODO APP WITH LOCAL STORAGE
              </h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://www.givehopef.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={givehope} alt="GiveHope Foundation" loading="lazy" />
              </figure>
              <h3 className="project-title">
                A website for a NGO namely GiveHope foundation
              </h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="applications"
          >
            <a
              href="https://github.com/codesmith17/PianoXylophoneAndroid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={piano} alt="Piano Xylophone App" loading="lazy" />
              </figure>
              <h3 className="project-title">
                Caravan - A musical instrument app
              </h3>
              <p className="project-category">Application</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="php"
          >
            <a
              href="https://github.com/codesmith17/RAILMAARG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={railmaarg} alt="Railmaarg" loading="lazy" />
              </figure>
              <h3 className="project-title">
                RailMaarg- A railway reservation system
              </h3>
              <p className="project-category">PHP</p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="competitive programming and dsa"
          >
            <a
              href="https://codeforces.com/profile/ukKrishna27081709"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img
                  src={codeforces}
                  alt="Codeforces Practice"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">
                Codeforces - Programming and DSAl Practices
              </h3>
              <p className="project-category">
                Competitive Programming and DSA
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="competitive programming and dsa"
          >
            <a
              href="https://www.codechef.com/users/krishna1727"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={codechef} alt="Codechef Practice" loading="lazy" />
              </figure>
              <h3 className="project-title">
                Codechef - Programming and DSAl Practices
              </h3>
              <p className="project-category">
                Competitive Programming and DSA
              </p>
            </a>
          </li>
          <li
            className="project-item active"
            data-filter-item
            data-category="competitive programming and dsa"
          >
            <a
              href="https://github.com/codesmith17/Leetcode-Practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <FaRegEye />
                </div>
                <img src={leetcode} alt="LeetCode Practice" loading="lazy" />
              </figure>
              <h3 className="project-title">
                LeetCode - Programming and DSAl Practices
              </h3>
              <p className="project-category">
                Competitive Programming and DSA
              </p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ArticlePortfolio;
