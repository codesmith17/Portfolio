import React, { useEffect } from "react";
import todo from "../../assets/images/todo-project.jpg";
import agnihotra from "../../assets/images/agnihotra.png";
import givehope from "../../assets/images/givehope.png";
import instyle from "../../assets/images/instyle-int.png";
import codeforces from "../../assets/images/codeforces.png.png";
import { FaRegEye } from "react-icons/fa";
import codechef from "../../assets/images/codechef.jpg";
import leetcode from "../../assets/images/leetcode.png";
import piano from "../../assets/images/piano.jpg";
import errorlogs from "../../assets/images/errorlogs.png";
import railmaarg from "../../assets/images/railmaarg.jpg";
import moviereview from "../../assets/images/movie_review.png";
import booksearch from "../../assets/images/booksearch.png";
import blog from "../../assets/images/blog.png";

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
                <img src={moviereview} alt="Movie Review App" loading="lazy" />
              </figure>
              <h3 className="project-title">
                FULLY FUNCTIONAL MOVIE REVIEW APP WITH ADDING FRIENDS FEATURE
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
              href="https://advanced-todo-list-six.vercel.app/"
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
