import React, { useContext } from 'react';
import '../../App.css';
import { PortfolioDataContext } from '../../context/PortfolioDataContext';
import { getProjectImageUrl } from '../../services/api';

export default function Projects() {
    const { projects } = useContext(PortfolioDataContext);

    // API-sourced projects only carry an _id (image bytes live in MongoDB and
    // are fetched via a dedicated endpoint); the bundled fallback defaults
    // still carry a local imported image asset directly.
    const imageSrc = (data) => data._id ? getProjectImageUrl(data._id) : data.image;

    return (
        <div id="spyProjects" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold mb-5'>Projects</h1>
            <div className='width-100 d-flex justify-content-around align-items-start flex-row flex-wrap mb-lg-4'>
                {projects.map((data) =>
                    <div key={data.id || data._id} className="card border-light mb-3">
                        <img src={imageSrc(data)} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">{data.name}</h5>
                            <div className='w-100 d-flex justify-content-between'>
                                <a href='/' onClick={(e) => { e.preventDefault(); window.location.href = data.link }} id={data.id || data._id} className="btn-for-projects">Checkout</a>
                                {data.apkFile ? <a href='/' onClick={(e) => { e.preventDefault(); window.location.href = data.apkLink }} id={`${data.id || data._id}-apk`} className="btn-for-projects">APK File</a> : <></>}
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
