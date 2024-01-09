import React from "react";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline, IoCalendarOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import myAvatarImage from "../../assets/images/my-avatar.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Sidebar = () => {
  return (
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src={myAvatarImage} alt="Krishna Tripathi" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Krishna Tripathi">
            Krishna Tripathi
          </h1>

          <p class="title">Web developer</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path
              d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"
              fill="#FFCC00"
            ></path>
          </svg>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <CiMail />
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a
                href="mailto:kanchanlatakrishna@gmail.com"
                class="contact-link"
              >
                kanchanlatakrishna@gmail.com
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <IoPhonePortraitOutline />
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+917016050711" class="contact-link">
                +917016050711
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <IoCalendarOutline />
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="2002-09-17">17 September, 2002</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <SlLocationPin />
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Nagpur, Maharashtra, India </address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a
              href="https://letterboxd.com/krishna_17/"
              title="Letterboxd"
              class="social-link"
            >
              <SiLetterboxd />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://wa.me/+917016050711"
              target="_blank"
              class="social-link"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://www.instagram.com/krishnatripathi_____/"
              target="_blank"
              class="social-link"
            >
              <FaInstagram />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://github.com/codesmith17"
              target="_blank"
              class="social-link"
            >
              <FaGithub />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/krishna-tripathi-483477255/"
              target="_blank"
              class="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
