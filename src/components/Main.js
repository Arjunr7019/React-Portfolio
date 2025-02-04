import React, { useEffect, useState, useRef } from 'react';
import './../App.css';
import { Toaster, toast } from 'sonner';
import profileImage2 from './img/profile-image2.png';
import { Link } from 'react-scroll';
import Qualification from './Qualification/Qualification';
import ContactForm from './ContactForm/ContactForm';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

export default function Main() {
    const [navClass, setNavClass] = useState("nav-item-change rounded-5");
    const containerRef = useRef(null);
    // const [navButton, setNavButton] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    const updatedInView = {};
                    const ids = ['spyAbout', 'spyProjects', 'spyQualification', 'spySkills', 'spyContact']
                    entries.forEach((entry) => {
                        if (ids.includes(entry.target.id)) {
                            updatedInView[entry.target.id] = entry.isIntersecting;
                            // console.log(updatedInView.spyAbout)
                        }
                    });
                    // console.log(updatedInView)
                    if (updatedInView.spyAbout) {
                        setNavClass("nav-item-change rounded-5");
                    } else if (updatedInView.spyProjects) {
                        setNavClass("nav-item-change-project rounded-5");
                    } else if (updatedInView.spyQualification) {
                        setNavClass("nav-item-change-qualification rounded-5");
                    } else if (updatedInView.spySkills) {
                        setNavClass("nav-item-change-skills rounded-5");
                    } else if (updatedInView.spyContact) {
                        setNavClass("nav-item-change-contactUs rounded-5");
                    }
                },
                { threshold: 0.1 } // Adjust threshold as needed
            );
    
            if (containerRef.current) {
                const elements = containerRef.current.querySelectorAll("[id]");
                elements.forEach((el) => observer.observe(el));
            }
    
            return () => {
                observer.disconnect(); // Clean up the observer on unmount
            };
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://portfolio-server-ngoy.onrender.com/api');

        if (response.status === 200) {
            toast.success('server started successfully.');
        } else {
            // The user is not authenticated.
        }
    }

    const navChange = (e) => {
        if (e.currentTarget.id === 'about') {
            setNavClass("nav-item-change rounded-5");
        }
        else if (e.currentTarget.id === 'projects') {
            setNavClass("nav-item-change-project rounded-5");
        }
        else if (e.currentTarget.id === 'qualification') {
            setNavClass("nav-item-change-qualification rounded-5");
        }
        else if (e.currentTarget.id === 'skills') {
            setNavClass("nav-item-change-skills rounded-5");
        }
        else if (e.currentTarget.id === 'contactUs') {
            setNavClass("nav-item-change-contactUs rounded-5");
        }
        // setTimeout(()=>{
        //     setNavButton(false)
        // },1000)
    };

    const onClickVisibilityChange = (e) => {
        e.preventDefault();
        document.getElementById('smNavItems').style.opacity = "0";
        navMenuChangeForSm();
    }


    const navMenuChangeForSm = () => {
        if (document.getElementById("nav-drop-for-sm").classList.contains('actineNav')) {
            document.getElementById('span1').style.transform = "rotate(0deg)";
            document.getElementById('span1').style.top = "0%";
            document.getElementById('span2').style.transform = "rotate(0deg)";
            document.getElementById('span2').style.top = "0%";
            document.getElementById('span3').style.width = "50%";
            document.getElementById('smNavItems').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('smNavItems').style.display = "none";
            }, 500)
            document.getElementById("nav-drop-for-sm").classList.remove("actineNav");
        }
        else {
            document.getElementById('span1').style.transform = "rotate(-45deg)";
            document.getElementById('span1').style.top = "11%";
            document.getElementById('span2').style.transform = "rotate(45deg)";
            document.getElementById('span2').style.top = "-4%";
            document.getElementById('span3').style.width = "0";
            document.getElementById('smNavItems').style.display = "unset";
            setTimeout(() => {
                document.getElementById('smNavItems').style.opacity = "100%";
            }, 100)
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
                    <div className={navClass}></div>
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
                                offset={-120}
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

            <div ref={containerRef}>
                <About></About>
                <Projects></Projects>
                <Qualification></Qualification>
                <Skills></Skills>
                <ContactForm></ContactForm>
            </div>

            {/* <!-- -----------------------------footer start---------------------------------- --> */}
            <footer>
                <div className="width-100 bg-body-tertiary d-flex flex-column justify-content-center align-items-center py-5">
                    <h4>Arjun R</h4>
                    <a href="/">Copyright © 2025 Arjun R. All rights reserved.</a>
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
            <Toaster position="bottom-right" />
        </>
    )
}
