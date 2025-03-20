import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./home.css";
import emailjs from "emailjs-com";
import {
  FaInstagram,
  FaTelegramPlane,
  FaMedal,
  FaSuitcase,
  FaHeadset,
  FaWhatsapp,
} from "react-icons/fa";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { BiMailSend, BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import toast from "react-hot-toast";
import chrome from "../Vedios/chrome.mp4";
import Linku from "../Vedios/image.png";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmial] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const template_ID = "template_rguqzgn";
  const user_ID = "8ZWQCjyWKAtQ40lOS";
  const service_ID = "service_ed3tk9v";

  useEffect(() => emailjs.init(user_ID), []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all the fields");
      setLoading(false);
      return;
    }

    await emailjs.send(service_ID, template_ID, {
      name: name,
      recipient: email,
    });
    toast.success("Thank you for your message. I will get back to you soon.");
    setLoading(false);
    setName("");
    setEmial("");
    setMessage("");
  };

  return (
    <div className="container">
      <motion.div
        className="card"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="link">
          <a href="https://www.linkedin.com/in/geda-durga-vara-praveen-5a4348237/">
            <FiLinkedin />{" "}
          </a>
          <a href="https://github.com/durgavarapraveen">
            <FiGithub />
          </a>
          <a href="mailto:geda.1@iitj.ac.in">
            <FiMail />{" "}
          </a>
          <a href="https://www.instagram.com/mr.un_happy/">
            <FaInstagram />{" "}
          </a>
        </div>
        <div className="intro">
          <p className="peru"> Vara Praveen</p>
          <div className="develop">
            <div className="line"></div>
            <Typewriter
              className="Typewriter"
              options={{
                strings: [
                  "Web Developer",
                  "Web Designer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="nagurinchi">
            I'm web developer from vizag. I am dedicated and passionate to my
            work{" "}
          </p>
          <a href="#contact">
            Say hello <FaTelegramPlane />{" "}
          </a>
        </div>
        <div className="photo">
          <img src="Images\photo 1.jpeg" alt="Photo" />
        </div>
      </motion.div>

      <motion.div
        className="card-2"
        id="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="aboutme">
          <span>About Me</span>
          <p>My Introduction</p>
        </div>
        <div className="aboutme-row">
          <div className="aboutme-img">
            <img src="Images\photo.2.jpeg" alt="About Me" />
          </div>
          <div className="aboutme-matter">
            <div className="box">
              <motion.div
                className="matter-box"
                initial={{ x: "300px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <FaMedal className="c10" />
                <span className="c11">Experience</span>
                <span className="c12">Professional</span>
              </motion.div>

              <motion.div
                className="matter-box"
                initial={{ x: "400px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              >
                <FaSuitcase className="c10" />
                <span className="c11">Completed</span>
                <span className="c12">20+ projects</span>
              </motion.div>

              <motion.div
                className="matter-box"
                initial={{ x: "300px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
              >
                <FaHeadset className="c10" />
                <span className="c11">Support</span>
                <span className="c12">Online 24/7</span>
              </motion.div>
            </div>
            <p>
              As a Full Stack developer, I excel in UI/UX design, crafting
              engaging web experiences. Proficient in HTML, CSS, JavaScript,
              React, NextJs,React Native, Firebase, supabase, Django, and the
              MERN. I deliver efficient, robust solutions for diverse projects,
              showcasing a blend of technical expertise and creative insight in
              my portfolio.
            </p>
          </div>
        </div>
      </motion.div>

      {/* <div className="card-3" id="work">
        <div className="aboutme">
          <span>Experience</span>
          <p>worked in</p>
        </div>

        <div className="work-col">
          <div className="work-div">
            <p className="heading">
              Frontend Developer - <span className="heading-span">LinkU</span>{" "}
              <span className="heading-date">[Freelance]</span>{" "}
            </p>
            <p className="innertext">
              <img src={arrow} alt="arrow" />
              Developed a Progressive Web App for Linku startup by implementing
              service workers to enhance user experience and drive engagement,
              enabling offline access and improved performance.
            </p>
            <p className="innertext">
              <img src={arrow} alt="arrow" />
              Integrated token-based authentication using Axios interceptors,
              ensuring secure session management with automatic refresh of
              access tokens every 15 minutes for a seamless user experience.
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" /> Built multi-role portals for
              candidates, recruiters, and admins, each with distinct
              functionalities, along with PhonePe payment gateway integration
              and infinite scroll for dynamic content loading.
            </p>
          </div>
        </div>

        <div className="work-col">
          <div className="work-div">
            <p className="heading">
              Full Stack Developer -{" "}
              <span className="heading-span">KB Cloudtech</span>{" "}
              <span className="heading-date">[May/24 - Dec/24]</span>{" "}
            </p>
            <p className="innertext">
              <img src={arrow} alt="arrow" />
              Worked on multiple projects at the same time and delivered them.
            </p>
            <p className="innertext">
              <img src={arrow} alt="arrow" />
              Worked using NextJs and Firebase
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" /> Incorporated LMS and CMS
              components to enhance user experiences, leading to a 40% boost in
              user engagement
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" />
              Developed a secure live exam feature with comprehensive tracking
              and video recording, enhancing exam integrity and providing
              detailed insights for analysis.
            </p>
          </div>
        </div>

        <div className="work-col">
          <div className="work-div">
            <p className="heading">
              Full Stack Developer -{" "}
              <span className="heading-span">Tamboola</span>{" "}
              <span className="heading-date">[Aug/23 - Nov/23]</span>{" "}
            </p>
            <p className="innertext">
              <img src={arrow} alt="arrow" /> Developed a user-friendly platform
              using ReactJS, Node.js, MongoDB, Express, Redux, Material UI, and
              Firebase..
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" />
              Designed and implemented a dynamic and responsive interface,
              enhancing user experience and engagement.
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" />
              Engineered robust backend systems for efficient data management
              and scalability.
            </p>
            <p className="innertext">
              {" "}
              <img src={arrow} alt="arrow" />
              Collaborated cross-functionally to align design with user needs,
              boosting engagement and operational efficiency in mobile repair
              services.
            </p>
          </div>
        </div>
      </div> */}

      <div className="card-3" id="skills">
        <motion.div
          className="aboutme"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <span>Skills</span>
          <p>My Technical skills</p>
        </motion.div>
        <div className="skills-row">
          <motion.div
            className="container-skills-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="dev">Development</p>
            <div className="container-skills">
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>HTML</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>CSS</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Java Script</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Type Script</p>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>React Js</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>React Native</p>
                  <span>Advanced</span>
                </div>
              </div>

              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>NextJs</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>NodeJs</p>
                  <span>Advanced</span>
                </div>
              </div>

              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>MongoDB</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Firebase</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Supabase</p>
                  <span>Intermediate</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Django</p>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            className="container-skills-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="dev">Languages</p>
            <div className="container-skills">
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>C</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>
                    C<strong>++</strong>{" "}
                  </p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>Python</p>
                  <span>Advanced</span>
                </div>
              </div>
              <div className="sk">
                <span class="material-symbols-outlined">verified</span>
                <div className="column">
                  <p>MYSQL</p>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      <div className="card-3" id="project">
        <div className="aboutme">
          <span>Projects</span>
        </div>
        <div className="projects-row">
          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={Linku} alt="LinkU" />
            <p className="web-name">Link U</p>
            <a href="https://www.linku.co.in/">Live Link</a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="Images\Guesthouse.png" alt="IITJ Guest House" />
            <p className="web-name">Guest House Booking Website</p>
            <a href="https://institute-guest-house-booking.onrender.com/">
              Live Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={"./Images/Suburbia.png"} alt="Ignus" />
            <p className="web-name">Suburbia</p>
            <a href="https://suburbia-eosin.vercel.app/">Live Link</a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={"./Images/QPaper.png"} alt="QPaper" />
            <p className="web-name">Q Paper</p>
            <a href="https://qpaper-rosy.vercel.app/">Live Link</a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/Ignus.png?raw=true"
              }
              alt="Ignus"
            />
            <p className="web-name">Ignus</p>
            <a href="https://github.com/durgavarapraveen/Ignus-23">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/Mampg.png?raw=true"
              }
              alt="MAMPG"
            />
            <p className="web-name">College Website</p>
            <a href="http://www.mampg.org/">Live Link</a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/DevQuest.png?raw=true"
              }
              alt="Dev Quest"
            />
            <p className="web-name">Compare - Compare your cost</p>
            <a href="https://github.com/durgavarapraveen/Devquest">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/chatApp.jpg?raw=true"
              }
              alt="Chat Application"
            />
            <p className="web-name">Chat Application</p>
            <a href="https://github.com/durgavarapraveen/chat_app_mern">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/Ecommerce.jpg?raw=true"
              }
              alt="Ecommerce Platform"
            />
            <p className="web-name">Ecommerce Platform</p>
            <a href="https://github.com/durgavarapraveen/Ecommerce-App-MERN">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={
                "https://github.com/durgavarapraveen/React_Portfolio/blob/master/src/Vedios/MonryTrackerApp.jpg?raw=true"
              }
              alt="Money Tracker App"
            />
            <p className="web-name">Money Tracker App</p>
            <a href="https://github.com/durgavarapraveen/MoneyTracker">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="https://i.imgur.com/hMpiEz0.png" alt="Epicure" />
            <p className="web-name">Epicure - Food Booking website</p>
            <a href="https://github.com/durgavarapraveen/Epicure_OnlineFoodBooking">
              Github Link
            </a>
          </motion.div>

          <motion.div
            className="container-projects"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe src={chrome} alt="Chrome Customization" />
            <p className="web-name">Chrome Customization</p>
            <a href="https://github.com/durgavarapraveen/ChromeCustomization">
              Github Link
            </a>
          </motion.div>
        </div>
      </div>

      <div className="card-3" id="contact">
        <motion.div
          className="aboutme1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>Get in touch</span>
          <p className="aboutme1-p">Contact me</p>
          <div className="contact-row">
            <div className="contact-box">
              <p className="p">Talk to me</p>
              <div className="box-11">
                <BiMailSend className="icon-box-11" />
                <p className="link-box-11">Email</p>
                <p className="username">geda.1@iitj.ac.in</p>
                <a href="mailto:geda.1@iitj.ac.in">
                  Write me <BiRightArrowAlt />
                </a>
              </div>
              <div className="box-11">
                <FaWhatsapp className="icon-box-11" />
                <p className="link-box-11">Whatsapp</p>
                <p className="username">********89</p>
                <a href="https://wa.me/7997859889">
                  Write me <BiRightArrowAlt />
                </a>
              </div>
              <div className="box-11">
                <FaInstagram className="icon-box-11" />
                <p className="link-box-11">Instagram</p>
                <p className="username">Varapraveen</p>
                <a href="https://www.instagram.com/mr.un_happy/">
                  Write me <BiRightArrowAlt />
                </a>
              </div>
            </div>
            <div className="message-box">
              <p>Write me your project</p>
              <form>
                <input
                  placeholder="Insert your name"
                  type="text"
                  className="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="username" className="name-label">
                  Name
                </label>
                <br />
                <input
                  placeholder="Insert your Email"
                  type="email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmial(e.target.value)}
                />
                <label htmlFor="email" className="email-label">
                  Email
                </label>
                <br />
                <textarea
                  placeholder="Write your Project"
                  className="project-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="project" className="project-label">
                  Project
                </label>
                <br />
                {loading ? (
                  <button className="submit" onClick={handleSubmit}>
                    Sending...
                  </button>
                ) : (
                  <button className="submit" onClick={handleSubmit}>
                    Send Message <FaTelegramPlane />
                  </button>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hor-line"></div>
      <fotter>
        <div className="fotter">
          <span className="span">Praveen</span>
          <div className="fotter-links">
            <span>
              <a href="#home" className="home-f">
                Home
              </a>
            </span>
            <span>
              <a href="#about" className="about-f">
                About
              </a>
            </span>
            <span>
              <a href="#work" className="about-f">
                Work
              </a>
            </span>
            <span>
              <a href="#skills" className="skills-f">
                Skills
              </a>
            </span>
            <span>
              <a href="#project" className="project-f">
                Projects
              </a>
            </span>
            {/* <span><a href='#contact' className='contact-f'>Contact</a></span> */}
          </div>
          <div className="fotter-apps">
            <a href="https://www.linkedin.com/in/geda-durga-vara-praveen-5a4348237/">
              <FiLinkedin />{" "}
            </a>
            <a href="https://github.com/durgavarapraveen">
              <FiGithub />
            </a>
            <a href="mailto:geda.1@iitj.ac.in">
              <FiMail />{" "}
            </a>
            <a href="https://www.instagram.com/mr.un_happy/">
              <FaInstagram />{" "}
            </a>
          </div>
          <p>© Praveen. All rights reserved</p>
          <p></p>
        </div>
      </fotter>
    </div>
  );
}

export default Home;
