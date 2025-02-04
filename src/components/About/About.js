import React, { useState } from 'react';
import '../../App.css';

const BackgroundSpans = ({ left, top, spanColor,radius,rotate,dimension }) => {
    return (
        <span
            style={{ 
                width: dimension, 
                height: dimension, 
                backgroundColor: spanColor, 
                borderRadius: radius,
                rotate:rotate, 
                position: "relative", 
                left: left, 
                top: top,
                // transition:"0.4s ease-in-out"
                 }}>
        </span>
    )
}
export default function About() {
    const[scrollValue, setScrollValue] = useState('');
    document.addEventListener('scroll',function(){
        if(window.scrollY < 840){
            setScrollValue(window.scrollY/80);
        }
    })
    console.log(scrollValue)
    return (
        <div id="spyAbout"
            style={{ height: '90vh' }}
            className='width-of-main-100 d-flex justify-content-center align-items-center flex-column'>
            <div style={{position:"absolute",zIndex:'-1',overflow:"hidden"}} className='h-100 w-100 d-flex'>
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${20 - scrollValue}%`} top='50%' rotate='40deg' radius='0.5rem' spanColor='gray'/>
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${10 - scrollValue}%`} top='40%' rotate='20deg' radius='0.5rem' spanColor='#b1b1b1' />
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${80 + scrollValue}%`} top='40%' rotate='40deg' radius='0.6rem' spanColor='#b1b1b1' />
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${90 + scrollValue}%`} top='70%' rotate='60deg' radius='0.5rem' spanColor='#b1b1b1' />
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${50 + scrollValue}%`} top='50%' rotate='40deg' radius='0.5rem' spanColor='#b1b1b1' />
                <BackgroundSpans dimension={`${24 + scrollValue}px`} left={`${40 - scrollValue}%`} top='20%' rotate='80deg' radius='0.5rem' spanColor='#b1b1b1' />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column pt-5'>
                <p className='width-of-main-name mb-0 p-0'>Hi,I'm Arjun R</p>
                <div className='width-of-main-100 d-flex justify-content-center align-items-center flex-row mt-sm-4 mt-3'>
                    <span className="material-symbols-outlined">
                        location_on
                    </span>
                    <p className='width-of-main-location m-0 p-0'>Bangalore,IN</p>
                </div>
                <p className='width-of-main-location mt-3 px-sm-0 px-5'>
                    MCA graduate and front-end developer skilled in React.js, JavaScript, and Node.js. <br /> Passionate about building responsive and user-friendly web applications.
                </p>
                <div id='download-button' className='d-flex justify-content-center align-items-center flex-row mt-4'>
                    <span className="material-symbols-outlined">
                        download
                    </span>
                    <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1R0bNhr7bRfT6_IcBbKr8k2hxo61FA77v/view?usp=sharing'} id='resumeBtn'>Download Resume</button>
                </div>
            </div>
        </div>
    )
}
