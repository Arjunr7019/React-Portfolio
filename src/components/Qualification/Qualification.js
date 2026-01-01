import React from 'react';
import './Qualification.css';
import './../../App.css';

export default function Qualification() {
    return (
        <div>
            <div id="spyQualification" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold mb-4'>Qualification</h1>

                <div className='cardBorder rounded-3 d-flex justify-content-center'>
                    <div className='qualificationVerticalBar'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='qualificationContent d-flex justify-content-around flex-column py-5 px-5'>
                        <div className='d-flex justify-content-start py-3 py-lg-0 ps-5 pe-0 pe-lg-5 mx-0 mx-lg-5'>
                            <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                <h2 className='fw-bold fontSize'>MCA</h2>
                                <p className='fw-bold text-body-tertiary fontSizeParagraph mb-1 mb-lg-3'>East West College of Management <br />Bangalore University <br />Bangalore - 560091</p>
                                <div className='text-body-tertiary d-flex m-0'>
                                    <span className="material-symbols-outlined iconSize">
                                        calendar_month
                                    </span>
                                    <p className='fw-bold m-0 fontSizeParagraph'>2022 - 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end py-3 py-lg-0 ps-5 pe-0 pe-lg-5 mx-0 mx-lg-5'>
                            <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                <h2 className='fw-bold fontSize'>BSc Electronics</h2>
                                <p className='fw-bold text-body-tertiary fontSizeParagraph mb-1 mb-lg-3'>University of Mysore <br />Hassan, Holenarasipura - 573211</p>
                                <div className='text-body-tertiary d-flex m-0'>
                                    <span className="material-symbols-outlined iconSize">
                                        calendar_month
                                    </span>
                                    <p className='fw-bold m-0 fontSizeParagraph'>2019 - 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start py-3 py-lg-0 ps-5 pe-0 pe-lg-5 mx-0 mx-lg-5'>
                            <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                <h2 className='fw-bold fontSize'>PUC&#40;PCMB&#41;</h2>
                                <p className='fw-bold text-body-tertiary fontSizeParagraph mb-1 mb-lg-3'>Government Boys Junier College <br />Hassan, Holenarasipura - 573211</p>
                                <div className='text-body-tertiary d-flex m-0'>
                                    <span className="material-symbols-outlined iconSize">
                                        calendar_month
                                    </span>
                                    <p className='fw-bold m-0 fontSizeParagraph'>2016 - 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end py-3 py-lg-0 ps-5 pe-0 pe-lg-5 mx-0 mx-lg-5'>
                            <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                <h2 className='fw-bold fontSize'>1st to 10th</h2>
                                <p className='fw-bold text-body-tertiary fontSizeParagraph mb-1 mb-lg-3'>Sri Vasvi Vidya Samsthe <br />Hassan, Holenarasipura - 573211</p>
                                <div className='text-body-tertiary d-flex m-0'>
                                    <span className="material-symbols-outlined iconSize">
                                        calendar_month
                                    </span>
                                    <p className='fw-bold m-0 fontSizeParagraph'>2006 - 2016</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
