import React, {useState, useRef, useLayoutEffect} from 'react'
import './home.css'
import emailjs from 'emailjs-com'
import { FaInstagram,FaTelegramPlane, FaMedal, FaSuitcase, FaHeadset, FaWhatsapp } from 'react-icons/fa';
import { FiGithub,FiMail, FiLinkedin} from 'react-icons/fi';
import { BiMailSend, BiRightArrowAlt } from "react-icons/bi";
import chrome from '../Vedios/chrome.mp4'
import arrow from '../Vedios/circle-arrow.png'


function Home() {

    const [name,setName] = useState("");
    const [email,setEmial] = useState("");
    const [message,setMessage] = useState("");

    const template_ID = "template_rguqzgn";
    const user_ID = "8ZWQCjyWKAtQ40lOS";
    const service_ID = "service_ed3tk9v";

    const handleSubmit = () => {
        var templateparams = {
            name: name,
            email: email,
            message: message
        }
        emailjs.send(service_ID,template_ID,templateparams,user_ID)
        .then((result) => {
            alert("Message sent succesfully");
        },(error) => {
            alert("Email not sent")
        } )
    }


    

  return (
    <div className='container'>
        

        <div className='card' id='home'>
            <div className='link'>
                <a href='https://www.linkedin.com/in/geda-durga-vara-praveen-5a4348237/'><FiLinkedin/> </a>
                <a href='https://github.com/durgavarapraveen'><FiGithub /></a>
                <a href='mailto:geda.1@iitj.ac.in'><FiMail/> </a>
                <a href='https://www.instagram.com/mr.un_happy/'><FaInstagram /> </a>
            </div>
            <div className='intro'>
                <p className='peru'> Vara Praveen</p>
                <div className='develop'>
                    <div className='line'></div>
                    <p>Web Developer</p>
                </div>
                <p className='nagurinchi'>I'm web developer from vizag. I am dedicated and passionate to my work </p>
                <a href='#contact'>Say hello  <FaTelegramPlane/> </a>
            </div>
            <div className='photo'>
                <img src='Images\photo 1.jpeg' alt='Photo' />
            </div>
        </div>

        <div className='card-2' id='about'>
            <div className='aboutme'>
                <span>About Me</span>
                <p>My Introduction</p>
            </div>
            <div className='aboutme-row'>
                <div className='aboutme-img'>
                    <img src='Images\photo.2.jpeg' />
                </div>
                <div className='aboutme-matter'>
                    <div className='box'>
                        <div className='matter-box'>
                            <FaMedal className='c10'/>
                            <span className='c11'>Experience</span>
                            <span className='c12'>Fresher</span>
                        </div>
                        <div className='matter-box'>
                            <FaSuitcase className='c10'/>
                            <span className='c11'>Completed</span>
                            <span className='c12'>15+ projects</span>
                        </div>
                        <div className='matter-box'>
                            <FaHeadset className='c10'/>
                            <span className='c11'>Support</span>
                            <span className='c12'>Online 24/7</span>
                        </div>
                    </div>
                    <p>Full Stack developer, I create web pages with UI / UX user interface, I have ability to write efficient code for a wide range of projects. I have experience working with a HTML, CSS, JavaScript, React and Django</p>
                </div>
            </div>
        </div>

        <div className='card-3' id='work' >
            <div className='aboutme'>
                <span>Work</span>
            </div>
            <div className='work-col'>
                <div className='work-div'>
                    <p className='heading'>Full Stack Developer - <span className='heading-span'>Tamboola</span> <span className='heading-date'>[Aug/23 - Nov/23]</span> </p>
                    <p className='innertext'><img src={arrow} alt='arrow' /> Developed a user-friendly platform using ReactJS, Node.js, MongoDB, Express, Redux, Material UI, and Firebase..</p>
                    <p className='innertext'> <img src={arrow} alt='arrow' />Designed and implemented a dynamic and responsive interface, enhancing user experience and engagement.</p>
                    <p className='innertext'> <img src={arrow} alt='arrow' />Engineered robust backend systems for efficient data management and scalability.</p>
                    <p className='innertext'> <img src={arrow} alt='arrow' />Collaborated cross-functionally to align design with user needs, boosting engagement and operational efficiency in mobile repair services.</p>
                </div>
            </div>
        </div>

        <div className='card-3' id='skills'>
            <div className='aboutme'>
                <span>Skills</span>
                <p>My Technical skills</p>
            </div>
            <div className='skills-row'>
                <div className='container-skills-1'>
                    <p className='dev'>Development</p>
                    <div className='container-skills'>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>HTML</p>
                                <span>Advanced</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>CSS</p>
                                <span>Advanced</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>Java Script</p>
                                <span>Advanced</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>React Js</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>Django</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>Bootstrap</p>
                                <span>Basic</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='container-skills-1'>
                    <p className='dev'>Languages</p>
                    <div className='container-skills'>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>C</p>
                                <span>Advanced</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>C<strong>++</strong> </p>
                                <span>Advanced</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>Python</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>MYSQL</p>
                                <span>Basic</span>
                            </div>
                        </div>
                        <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>PHP</p>
                                <span>Basic</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>    

        

        <div className='card-3' id='project'>
            <div className='aboutme'>
                <span>Projects</span>
                {/* <p>My Projects</p> */}
            </div>
            <div className='projects-row'>
                <div className='container-projects'>
                    <img src='Images\Guesthouse.png' alt='TIC TAC TOE' />
                    <p className='web-name'>Guest House Booking Website</p>
                    <a href='https://github.com/durgavarapraveen/GuestHouseBookingWebsite' >Git Link</a>
                </div>
                
                <div className='container-projects'>
                    <img src='Images\Tamboola.png' alt='Quiz Game' />
                    <p className='web-name'>Tamboola - Online Repair Store</p>
                    <a href='https://github.com/gadset' >Git Link</a>
                </div>

                <div className='container-projects'>
                    <img src='Images\rubaitul-azad-qqV7i39Ekj0-unsplash.jpg' alt='Translator' />
                    <p className='web-name'>College Website</p>
                    <a href='https://github.com/durgavarapraveen/MAMPG-Project' >Git Link</a>
                </div>

                <div className='container-projects'>
                    <img src='https://i.imgur.com/hMpiEz0.png' alt='Epicure' />
                    <p className='web-name'>Epicure - Food Bookin website</p>
                    <a href='https://github.com/durgavarapraveen/Epicure_OnlineFoodBooking' >Github Link</a>
                </div>
                
                <div className='container-projects'>
                    {/* <img src='Images\react-webpage.png' alt='Epicure' /> */}
                    <iframe src={chrome} />
                    <p className='web-name'>Chrome Customization</p>
                    <a href='https://github.com/durgavarapraveen/ChromeCustomization'>Git Link</a>
                </div>

                <div className='container-projects'>
                    <img src='Images\Weatherapp.png' alt='Weather APP' />
                    <p className='web-name'>Weather App</p>
                    <a href='https://github.com/durgavarapraveen/Weather_App'>Github Link</a>
                </div>
            </div>
        </div>
        
        <div className='card-3' id='contact'>
            <div className='aboutme1'>
                <span>Get in touch</span>
                <p className='aboutme1-p'>Contact me</p>
                <div className='contact-row'>
                    <div className='contact-box'>
                        <p className='p'>Talk to me</p>
                        <div className='box-11'>
                            <BiMailSend className='icon-box-11'/>
                            <p className='link-box-11'>Email</p>
                            <p className='username'>geda.1@iitj.ac.in</p>
                            <a href='mailto:geda.1@iitj.ac.in'>Write me <BiRightArrowAlt/></a>
                        </div>
                        <div className='box-11'>
                            <FaWhatsapp className='icon-box-11'/>
                            <p className='link-box-11'>Whatsapp</p>
                            <p className='username'>********89</p>
                            <a href="https://wa.me/7997859889">Write me <BiRightArrowAlt/></a>
                        </div>
                        <div className='box-11'>
                            <FaInstagram className='icon-box-11'/>
                            <p className='link-box-11'>instagram</p>
                            <p className='username'>Varapraveen</p>
                            <a href='https://www.instagram.com/mr.un_happy/'>Write me <BiRightArrowAlt/></a>
                        </div>
                    </div>
                    <div className='message-box'>
                        <p>Write me your project</p>
                        <form onSubmit={handleSubmit} >
                            <input placeholder='Insert your name' type='text' className='name-input' required value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor='username' className='name-label'>Name</label>
                            <br/>
                            <input placeholder='Insert your Email' type='email' className='email-input' required value={email} onChange={(e) => setEmial(e.target.value)} />
                            <label htmlFor='email' className='email-label'>Email</label>
                            <br />
                            <textarea placeholder='Write your Project' className='project-input' required value={message} onChange={(e) => setMessage(e.target.value)} />
                            <label htmlFor='project' className='project-label'>Project</label>
                            <br />
                            <button className='submit' >Send Message <FaTelegramPlane/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='hor-line'></div>
        <fotter>
            <div className='fotter'>
                <span className='span'>Praveen</span>
                <div className='fotter-links'>
                    <span><a href='#home' className='home-f'>Home</a></span>
                    <span><a href='#about' className='about-f'>About</a></span>
                    <span><a href='#work' className='about-f'>Work</a></span>
                    <span><a href='#skills' className='skills-f'>Skills</a></span>
                    <span><a href='#project' className='project-f'>Projects</a></span>
                    {/* <span><a href='#contact' className='contact-f'>Contact</a></span> */}
                </div>
                <div className='fotter-apps'>
                    <a href='https://www.linkedin.com/in/geda-durga-vara-praveen-5a4348237/'><FiLinkedin/> </a>
                    <a href='https://github.com/durgavarapraveen'><FiGithub /></a>
                    <a href='mailto:geda.1@iitj.ac.in'><FiMail/> </a>
                    <a href='https://www.instagram.com/mr.un_happy/'><FaInstagram /> </a>
                </div>
                <p>© Praveen. All rights reserved</p>
                <p></p>
            </div>
        </fotter>
    
    </div>
  );
}

export default Home;