import React, {useState} from 'react'
import './home.css'
import emailjs from 'emailjs-com'
import { FaInstagram,FaTelegramPlane, FaMedal, FaSuitcase, FaHeadset, FaWhatsapp } from 'react-icons/fa';
import { FiGithub,FiMail, FiLinkedin} from 'react-icons/fi';
import { BiMailSend, BiRightArrowAlt } from "react-icons/bi";


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
                            <span className='c12'>10+ projects</span>
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
                        {/* <div className='sk'>
                            <span class="material-symbols-outlined">verified</span>
                            <div className='column'>
                                <p>Git</p>
                                <span>Intermediate</span>
                            </div>
                        </div> */}
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
                <p>My Projects</p>
            </div>
            <div className='projects-row'>
                <div className='container-projects'>
                    <img src='Images\clement-helardot-95YRwf6CNw8-unsplash.jpg' alt='TIC TAC TOE' />
                    <p className='web-name'>Tic Tac Toe Game</p>
                    <a href='https://durgavarapraveen.github.io/Tic_Tac_Toe/' >Demo</a>
                </div>
                <div className='container-projects'>
                    <img src='Images\designecologist-Pmh0UoG1vlE-unsplash.jpg' alt='Quiz Game' />
                    <p className='web-name'>Quiz Game</p>
                    <a href='https://durgavarapraveen.github.io/Quiz-Game/' >Demo</a>
                </div>
                <div className='container-projects'>
                    <img src='Images\rubaitul-azad-qqV7i39Ekj0-unsplash.jpg' alt='Translator' />
                    <p className='web-name'>Tranlator</p>
                    <a href='https://durgavarapraveen.github.io/Translator/' >Demo</a>
                </div>
                <div className='container-projects'>
                    <img src='https://i.imgur.com/hMpiEz0.png' alt='Epicure' />
                    <p className='web-name'>Epicure - Food Bookin website</p>
                    <a href='https://github.com/durgavarapraveen/Epicure_OnlineFoodBooking' >Github Link</a>
                </div>
                <div className='container-projects'>
                    <img src='Images\erik-mclean-bGWVhFY1gH0-unsplash.jpg' alt='Epicure' />
                    <p className='web-name'>Fullstack - LoginPage</p>
                    <a href='https://github.com/durgavarapraveen/Fullstack_Loginpage' >Github Link</a>
                </div>
                <div className='container-projects'>
                    <img src='Images\nick-morrison-FHnnjk1Yj7Y-unsplash.jpg' alt='Epicure' />
                    <p className='web-name'>Blog</p>
                    <a href='https://github.com/durgavarapraveen/Blog' >Github Link</a>
                </div>
                <div className='container-projects'>
                    <img src='Images\react-webpage.png' alt='Epicure' />
                    <p className='web-name'>Adventure - Webpage</p>
                    <a href='https://647210d66d456f046d11ee56--lambent-hummingbird-10acf7.netlify.app/signup' >Demo</a>
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
                            <p className='username'>user@gmail.com</p>
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
                    <span><a href='#skills' className='skills-f'>Skills</a></span>
                    <span><a href='#project' className='project-f'>Projects</a></span>
                    <span><a href='#contact' className='contact-f'>Contact</a></span>
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

        {/* <div className='header-1'>
            <p ><a href='#' className='name1'>Praveen</a> </p>
            <button onClick={handleclick}><span class="material-symbols-outlined">widgets</span></button>
        </div>

            <div className={click ? 'hidden-col' : 'view'}>
                <div  className='hidden-col'>
                    <a href='#'><FaHome className='span' /></a>
                    <a href='#' className='home1'>Home</a>
                </div>
                
                <div className='hidden-col'>
                    <a href='#about'><BsFillPersonFill className='span' /> </a>
                    <a href='#about' className='home1'>About</a>
                </div>
                <div className='hidden-col'>
                    <a href='#skills'><BsFillFileEarmarkSpreadsheetFill className='span' /> </a>
                    <a href='#skills' className='home1'>Skills</a>
                </div>
                <div className='hidden-col'>
                    <a href='#project'><BsFillImageFill className='span' /> </a>
                    <a href='#project' className='home1'>Projects</a>
                </div>
                <div className='hidden-col'>
                    <a href='#contact'><FaTelegramPlane className='span' /> </a>
                    <a href='#contact' className='home1'>Contact</a>
                </div>

            </div> */}



        {/* <div className='scroll'>
            <p>Scroll Down</p>
             <span class="material-symbols-outlined">expand_more</span>
             <i class="fa-solid fa-down"></i>
        </div>  */}

        
        

    

    </div>
  );
}

export default Home;