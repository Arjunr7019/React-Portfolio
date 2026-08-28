import React, { useContext } from 'react';
import './Qualification.css';
import './../../App.css';
import { PortfolioDataContext } from '../../context/PortfolioDataContext';

export default function Qualification() {
    const { qualifications } = useContext(PortfolioDataContext);

    return (
        <div>
            <div id="spyQualification" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
                <h1 className='fw-bold mb-4'>Qualification</h1>

                <div className='cardBorder rounded-3 d-flex justify-content-center'>
                    <div className='qualificationVerticalBar'>
                        {qualifications.map((q) => <span key={`bar-${q.id || q._id}`}></span>)}
                    </div>
                    <div className='qualificationContent d-flex justify-content-around flex-column py-5 px-5'>
                        {qualifications.map((q, index) => (
                            <div key={q.id || q._id} className={`d-flex ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'} py-3 py-lg-0 ps-5 pe-0 pe-lg-5 mx-0 mx-lg-5`}>
                                <div className='px-0 px-lg-5 mx-0 mx-lg-5'>
                                    <h2 className='fw-bold fontSize'>{q.degree}</h2>
                                    <p className='fw-bold text-body-tertiary fontSizeParagraph mb-1 mb-lg-3'>{q.institution} <br />{q.address}</p>
                                    <div className='text-body-tertiary d-flex m-0'>
                                        <span className="material-symbols-outlined iconSize">
                                            calendar_month
                                        </span>
                                        <p className='fw-bold m-0 fontSizeParagraph'>{q.startYear} - {q.endYear}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
