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
                I hold a Bachelor of Science degree from the University of Mysore and am currently pursuing a Master of Computer Applications (MCA).<br></br>
                I have hands-on experience in web development technologies, including HTML, CSS, and JavaScript. <br></br>
                Additionally, I am proficient in C programming. I have also gained experience with the React JS, utilizing Node.js for server-side development.
            </p>
            <div className='download-button d-flex justify-content-center align-items-center flex-row mt-4'>
                <span className="material-symbols-outlined">
                    download
                </span>
                <button onClick={()=> window.location.href = 'https://drive.google.com/file/d/1_cqqWT2qTwpaG2j5fE-aF3ycv07PskJn/view?usp=drive_link'} id='resumeBtn'>Download Resume</button>
            </div>
        </div>
    )
}
