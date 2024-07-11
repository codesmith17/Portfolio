import React from "react";
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
const ArticlePortfolio = () => {
  return (
    <article class="portfolio" data-page="portfolio">
      <header>
        <h2 class="h2 article-title">Portfolio</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button class="active" data-filter-btn>
              All
            </button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>PHP</button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>Applications</button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
          <li class="filter-item">
            <button data-filter-btn>Competetive Programming and DSA</button>
          </li>
        </ul>

        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div class="select-value" data-selecct-value>
              Select category
            </div>

            <div class="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul class="select-list">
            <li class="select-item">
              <button data-select-item>All</button>
            </li>

            <li class="select-item">
              <button data-select-item>PHP</button>
            </li>

            <li class="select-item">
              <button data-select-item>Application</button>
            </li>

            <li class="select-item">
              <button data-select-item>Web development</button>
            </li>
            <li class="select-item">
              <button data-select-item>Competetive Programming and DSA</button>
            </li>
          </ul>
        </div>

        <ul class="project-list">
          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/ERROR_LOGS_DATABASE"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={errorlogs} alt="summary" loading="lazy" />
              </figure>

              <h3 class="project-title">
                Error Logs Database using Web development and python
              </h3>

              <p class="project-category">Web Development</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://github.com/codesmith17/ADVANCED-TODO-LIST"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={todo} alt="todo" loading="lazy" />
              </figure>

              <h3 class="project-title">
                An ADVANCED TODO APP WITH LOCAL STORAGE
              </h3>

              <p class="project-category">Web development</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://www.givehopef.org/" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={givehope} alt="orizon" loading="lazy" />
              </figure>

              <h3 class="project-title">
                A website for a NGO namely GiveHope foundation
              </h3>

              <p class="project-category">Web development</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://www.givehopef.org/" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={givehope} alt="orizon" loading="lazy" />
              </figure>

              <h3 class="project-title">
                A website for a NGO namely GiveHope foundation
              </h3>

              <p class="project-category">Web development</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a
              href="https://github.com/codesmith17/PianoXylophoneAndroid"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={piano} alt="brawlhalla" loading="lazy" />
              </figure>

              <h3 class="project-title">Caravan - A musical instrument app</h3>

              <p class="project-category">Application</p>
            </a>
          </li>

          <li class="project-item  active" data-filter-item data-category="php">
            <a href="https://github.com/codesmith17/RAILMAARG" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={railmaarg} alt="dsm." loading="lazy" />
              </figure>

              <h3 class="project-title">RAILMAARG (IRCTC CLONE)</h3>

              <p class="project-category">PHP</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://agnihotra-eternal-agni.vercel.app/"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={agnihotra} alt="summary" loading="lazy" />
              </figure>

              <h3 class="project-title">Agnihotra Countdown Timer</h3>

              <p class="project-category">Web Development</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://instyle-interiors.vercel.app/#">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={instyle} alt="arrival" loading="lazy" />
              </figure>

              <h3 class="project-title">Instyle Interiors</h3>

              <p class="project-category">Web development</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="competetive programming and dsa"
          >
            <a
              href="https://codeforces.com/profile/ukKrishna27081709"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={codeforces} alt="arrival" loading="lazy" />
              </figure>

              <h3 class="project-title">Codeforces</h3>

              <p class="project-category">Competetive Programming and DSA</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="competetive programming and dsa"
          >
            <a
              href="https://www.codechef.com/users/krishna1727"
              target="_blank"
            >
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={codechef} alt="arrival" loading="lazy" />
              </figure>

              <h3 class="project-title">Codechef</h3>

              <p class="project-category">Competetive Programming and DSA</p>
            </a>
          </li>
          <li
            class="project-item  active"
            data-filter-item
            data-category="competetive programming and dsa"
          >
            <a href="https://leetcode.com/krishna170902/" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <FaRegEye />
                </div>

                <img src={leetcode} alt="arrival" loading="lazy" />
              </figure>

              <h3 class="project-title">Leetcode</h3>

              <p class="project-category">Competetive Programming and DSA</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ArticlePortfolio;
