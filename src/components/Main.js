import React, { useState } from 'react'
import profileImage2 from './img/profile-image2.png';
import WeatherForecast from './img/WeatherForecast.png';
import TablenomsSite from './img/TablenomsSite.png';
import StopClock from './img/StopClock.png';
import onlineCodeEdtior from './img/onlineCodeEdtior.png';
import InstagramReelPostDownloader from './img/InstagramReelPostDownloader.png';
import { Link } from 'react-scroll';
import Qualification from './Qualification/Qualification';
import ContactForm from './ContactForm/ContactForm';

export default function Main() {

    const [count, setCount] = useState("nav-item-change rounded-5");

    const navChange = (e) => {
        if (e.currentTarget.id === 'about') {
            setCount("nav-item-change rounded-5");
        }
        else if (e.currentTarget.id === 'projects') {
            setCount("nav-item-change-project rounded-5");
        }
        else if (e.currentTarget.id === 'qualification') {
            setCount("nav-item-change-qualification rounded-5");
        }
        else if (e.currentTarget.id === 'skills') {
            setCount("nav-item-change-skills rounded-5");
        }
        else if (e.currentTarget.id === 'contactUs') {
            setCount("nav-item-change-contactUs rounded-5");
        }
    };

    const onClickVisibilityChange = (e) => {
        e.preventDefault();
        document.getElementById('smNavItems').style.opacity = "0";
        navMenuChangeForSm();
    }

    const DownloadLinks = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget.id);
        if (e.currentTarget.id === 'resumeBtn') {
            window.location.href = 'https://drive.google.com/file/d/1_cqqWT2qTwpaG2j5fE-aF3ycv07PskJn/view?usp=drive_link';
        }
        else if (e.currentTarget.id === 'projectWeather') {
            window.location.href = 'https://arjunr7019.github.io/WeatherForecast/';
        }
        else if (e.currentTarget.id === 'projectTablenoms') {
            window.location.href = 'https://tablenoms.com/';
        }
        else if (e.currentTarget.id === 'projectStopClock') {
            window.location.href = 'https://arjunr7019.github.io/StopClock/';
        }
        else if (e.currentTarget.id === 'projectOnlineCodeEdtior') {
            window.location.href = 'https://arjunr7019.github.io/online-code-editor/';
        }
        else if (e.currentTarget.id === 'projectInstagram') {
            window.location.href = 'https://arjunr7019.github.io/insta-download/';
        }
        else if (e.currentTarget.id === 'LinkedIn') {
            window.location.href = 'https://www.linkedin.com/in/arjun-r-634413236/';
        }
        else if (e.currentTarget.id === 'Instagram') {
            window.location.href = 'https://www.instagram.com/rgowdaarjun/';
        }
        else if (e.currentTarget.id === 'twitter') {
            window.location.href = 'https://twitter.com/ArjunRGowda6';
        }
    }

    const navMenuChangeForSm = () => {
        if (document.getElementById("nav-drop-for-sm").classList.contains('actineNav')) {
            document.getElementById('span1').style.transform = "rotate(0deg)";
            document.getElementById('span1').style.top = "0%";
            document.getElementById('span2').style.transform = "rotate(0deg)";
            document.getElementById('span2').style.top = "0%";
            document.getElementById('span3').style.width = "50%";
            document.getElementById('smNavItems').style.opacity = "0";
            document.getElementById("nav-drop-for-sm").classList.remove("actineNav");
        }
        else {
            document.getElementById('span1').style.transform = "rotate(-45deg)";
            document.getElementById('span1').style.top = "11%";
            document.getElementById('span2').style.transform = "rotate(45deg)";
            document.getElementById('span2').style.top = "-4%";
            document.getElementById('span3').style.width = "0";
            document.getElementById('smNavItems').style.opacity = "100%";
            document.getElementById("nav-drop-for-sm").classList.add("actineNav");
        }
    }
    return (
        <>
            {/* <!-- ---------------------Header Start------------------------------------ --> */}
            <div className='positionSticky d-flex flex-row justify-content-sm-around justify-content-between mt-4 mx-4 mx-x-0'>
                <div className='profileArea d-flex justify-content-center align-items-center'>
                    <img className='profileImage' src={profileImage2} alt='profileImage' />
                </div>
                <div className='nav-menu d-sm-flex d-none justify-content-center align-items-center'>
                    <div className={count}></div>
                    <nav className='nav-main d-flex flex-row'>

                        <ul className='nav-content d-flex flex-row justify-content-around p-0 m-0'>
                            <li><Link id='about' className="nav-text active" onClick={navChange}
                                to="spyAbout"
                                spy={true}
                                smooth={true}
                                offset={-160}
                                duration={100}>About</Link></li>
                            <li><Link id='projects' className="nav-text" onClick={navChange}
                                to="spyProjects"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={100}>Projects</Link>
                            </li>
                            <li><Link id='qualification' className="nav-text" onClick={navChange}
                                to="spyQualification"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={100} >Qualification</Link></li>
                            <li><Link id='skills' className="nav-text" onClick={navChange}
                                to="spySkills"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={100}>Skills</Link>
                            </li>
                            <li><Link id='contactUs' className="nav-text" onClick={navChange}
                                to="spyContact"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={100}>Contact</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
                <div id="nav-drop-for-sm" onClick={navMenuChangeForSm}
                    className='profileArea d-flex justify-content-center flex-column align-items-center'>
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                </div>
                <div id="smNavItems" className="navItemsForSm p-4 rounded-4">
                    <ul className='nav-content d-flex flex-column justify-content-around p-0 m-0'>
                        <li><Link id='a' href='/' className="nav-text fs-3" onClick={onClickVisibilityChange}
                            to="spyAbout"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={100} >About</Link></li>
                        <li><Link id='b' href='/' className="nav-text fs-3" onClick={onClickVisibilityChange}
                            to="spyProjects"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={100}>Projects</Link></li>
                        <li><Link id='c' href='/' className="nav-text fs-3" onClick={onClickVisibilityChange}
                            to="spyQualification"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={100}>Qualification</Link></li>
                        <li><Link id='d' href='/' className="nav-text fs-3" onClick={onClickVisibilityChange}
                            to="spySkills"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={100}>Skills</Link></li>
                        <li><Link id='e' href='/' className="nav-text fs-3" onClick={onClickVisibilityChange}
                            to="spyContact"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={100}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- ---------------------------------Header Ends----------------------------------- --> */}

            {/* --------------------------About Start-------------------------------- */}
            <div id="spyAbout"
                className='width-of-main-100 d-flex justify-content-center align-items-center flex-column pb-5 pb-sm-0'>
                <p className='width-of-main-name mt-5 mb-0 p-0'>Hi,I'm Arjun R</p>
                <div className='width-of-main-100 d-flex justify-content-center align-items-center flex-row mt-sm-4 mt-3'>
                    <span className="material-symbols-outlined">
                        location_on
                    </span>
                    <p className='width-of-main-location m-0 p-0'>Bangalore,IN</p>
                </div>
                <p className='width-of-main-location mt-sm-5 mt-3 px-sm-0 px-5'>
                    I hold a Bachelor of Science degree from the University of Mysore and am currently pursuing a Master of Computer Applications (MCA).<br></br>
                    I have hands-on experience in web development technologies, including HTML, CSS, and JavaScript. <br></br>
                    Additionally, I am proficient in C programming. I have also gained experience with the React JS, utilizing Node.js for server-side development.
                </p>
                <div className='download-button d-flex justify-content-center align-items-center flex-row mt-4'>
                    <span className="material-symbols-outlined">
                        download
                    </span>
                    <button onClick={DownloadLinks} id='resumeBtn'>Download Resume</button>
                </div>
            </div>
            {/* --------------------------About End-------------------------------- */}

            {/* --------------------------Projects Start-------------------------------- */}
            <div id="spyProjects" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold mb-4'>Projects</h1>
                <div className='width-100 d-flex justify-content-around align-items-center flex-sm-row flex-column mb-lg-4'>
                    <div className="card border-light mb-3 mb-sm-0">
                        <img src={WeatherForecast} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">Weather Forecast</h5>
                            <a href='/' onClick={DownloadLinks} id="projectWeather" className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>
                    <div className="card border-light mb-3 mb-sm-0">
                        <img src={TablenomsSite} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">Tablenoms Site</h5>
                            <a href='/' onClick={DownloadLinks} id="projectTablenoms" className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>
                    <div className="card border-light mb-3 mb-sm-0">
                        <img src={StopClock} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">Stop Clock</h5>
                            <a href='/' onClick={DownloadLinks} id="projectStopClock" className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>
                    <div className="card border-light mb-3 mb-sm-0">
                        <img src={onlineCodeEdtior} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">Online Code Edtior</h5>
                            <a href='/' onClick={DownloadLinks} id="projectOnlineCodeEdtior" className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>
                </div>
                <div className='width-100 d-flex justify-content-around align-items-center flex-sm-row flex-column'>
                    <div className="card border-light mb-3 mb-sm-0">
                        <img src={InstagramReelPostDownloader} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">Instagram Reel & Post Downloader</h5>
                            <a href='/' onClick={DownloadLinks} id="projectInstagram" className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------About End-------------------------------- */}

            {/* -----------------------------Qualification Start------------------------- */}
            <Qualification></Qualification>
            {/* -----------------------------Qualification End------------------------- */}

            {/* -----------------------------Skills Start------------------------- */}
            <div id="spySkills" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold mb-4'>Skills</h1>
                <div className='width-100 cardBorder rounded-3 p-sm-5 p-4'>
                    <div className='pb-3'>
                        <h3>JavaScript</h3>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar width-90"></div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <h3>React JS</h3>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar width-70"></div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <h3>CSS</h3>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar width-90"></div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <h3>HTML</h3>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar width-90"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------Skills End------------------------- */}

            {/* -----------------------------Contact Us Start------------------------- */}
            <ContactForm></ContactForm>
            {/* -----------------------------Contact Us End------------------------- */}

            {/* <!-- -----------------------------footer start---------------------------------- --> */}
            <footer>
                <div className="width-100 bg-body-tertiary d-flex flex-column justify-content-center align-items-center py-5">
                    <h4>Arjun R</h4>
                    <a href="/">Copyright © 2023 Arjun R. All rights reserved.</a>
                </div>
            </footer>
            {/* <!-- -----------------------------footer end---------------------------------- --> */}

            <div id="forUpper" className="d-flex justify-content-center align-items-center">
                <a href="#scrollspyHeading5" className="d-flex justify-content-center align-items-center">
                    <span className="material-symbols-outlined fs-3 ">
                        arrow_upward
                    </span>
                </a>
            </div>
        </>
    )
}
