import React from 'react';
import '../../App.css';

export default function Skills() {
    return (
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
                    <h3>Node JS</h3>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100">
                        <div className="progress-bar width-70"></div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3>Bootstrap</h3>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100">
                        <div className="progress-bar width-90"></div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3>Git & GitHub</h3>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100">
                        <div style={{width:"60%"}} className="progress-bar width-60"></div>
                    </div>
                </div>
                <div className='pb-3'>
                    <h3>C</h3>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100">
                        <div style={{width:"60%"}} className="progress-bar width-60"></div>
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
    )
}
