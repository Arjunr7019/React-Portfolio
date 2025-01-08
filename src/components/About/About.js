import React from 'react';
import '../../App.css';

export default function About() {
    return (
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
            I am a highly motivated software developer with a Master of Computer Applications (MCA) and a Bachelor of Science degree from the University of Mysore. <br/>
             With a strong foundation in programming and web development, I specialize in crafting dynamic and user-friendly web applications.<br/>
              My expertise includes HTML, CSS, JavaScript, and React JS for front-end development, while leveraging Node.js for efficient server-side solutions. <br/>
               Additionally, I have a solid understanding of C programming, which enhances my problem-solving and algorithmic skills. <br/>
                I am passionate about continuous learning and applying innovative technologies to deliver impactful solutions
            </p>
            <div className='download-button d-flex justify-content-center align-items-center flex-row mt-4'>
                <span className="material-symbols-outlined">
                    download
                </span>
                <button onClick={()=> window.location.href = 'https://drive.google.com/file/d/1R0bNhr7bRfT6_IcBbKr8k2hxo61FA77v/view?usp=sharing'} id='resumeBtn'>Download Resume</button>
            </div>
        </div>
    )
}
