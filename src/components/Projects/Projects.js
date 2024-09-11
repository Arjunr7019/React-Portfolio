import React from 'react';
import '../../App.css';
import WeatherForecast from '../img/WeatherForecast.png';
import TablenomsSite from '../img/TablenomsSite.png';
import StopClock from '../img/StopClock.png';
import onlineCodeEdtior from '../img/onlineCodeEdtior.png';
import InstagramReelPostDownloader from '../img/InstagramReelPostDownloader.png';

export default function Projects() {

    const Links = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget.id);
        if (e.currentTarget.id === 'projectWeather') {
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
    }

    const projects = [
        { name: "Weather Forecast", image: WeatherForecast, id: "projectWeather" },
        { name: "Tablenoms Site", image: TablenomsSite, id: "projectTablenoms" },
        { name: "Stop Clock", image: StopClock, id: "projectStopClock" },
        { name: "Online Code Edtior", image: onlineCodeEdtior, id: "projectOnlineCodeEdtior" },
        { name: "Instagram Reel & Post Downloader", image: InstagramReelPostDownloader, id: "projectInstagram" }
    ]
    return (
        <div id="spyProjects" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold mb-4'>Projects</h1>
            <div className='width-100 d-flex justify-content-around align-items-center flex-row flex-wrap mb-lg-4'>
                {projects.map((data) =>
                    <div key={data.id} className="card border-light mb-3">
                        <img src={data.image} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">{data.name}</h5>
                            <a href='/' onClick={Links} id={data.id} className="btn-for-projects">Git Deploy</a>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
