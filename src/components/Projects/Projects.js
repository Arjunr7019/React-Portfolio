import React from 'react';
import '../../App.css';
import WeatherForecast from '../img/WeatherForecast.png';
import TablenomsSite from '../img/TablenomsSite.png';
import StopClock from '../img/StopClock.png';
import onlineCodeEdtior from '../img/onlineCodeEdtior.png';
import InstagramReelPostDownloader from '../img/InstagramReelPostDownloader.png';
import ProjectMusicApp from '../img/projectMusicApp.jpg';
import MusicAppFile from '../../Assets/musicApp-Alpha-v1.3.apk'

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
        else if (e.currentTarget.id === 'projectMusicApp') {
            e.currentTarget.innerText === "APK File" ? window.location.href = MusicAppFile : window.location.href = 'https://github.com/Arjunr7019/musicApp';
        }
    }

    const projects = [
        { name: "Weather Forecast", image: WeatherForecast, id: "projectWeather", apkFile: false },
        { name: "Tablenoms Site", image: TablenomsSite, id: "projectTablenoms", apkFile: false },
        { name: "Stop Clock", image: StopClock, id: "projectStopClock", apkFile: false },
        { name: "Online Code Edtior", image: onlineCodeEdtior, id: "projectOnlineCodeEdtior", apkFile: false },
        { name: "Instagram Reel & Post Downloader", image: InstagramReelPostDownloader, id: "projectInstagram", apkFile: false },
        { name: "MusicApp(React-native)", image: ProjectMusicApp, id: "projectMusicApp", apkFile: true }
    ]
    return (
        <div id="spyProjects" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold mb-4'>Projects</h1>
            <div className='width-100 d-flex justify-content-around align-items-start flex-row flex-wrap mb-lg-4'>
                {projects.map((data) =>
                    <div key={data.id} className="card border-light mb-3">
                        <img src={data.image} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">{data.name}</h5>
                            <div className='w-100 d-flex justify-content-between'>
                                <a href='/' onClick={Links} id={data.id} className="btn-for-projects">Git Deploy</a>
                               {data.apkFile ? <a href='/' onClick={Links} id={data.id} className="btn-for-projects">APK File</a>:<></>}
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
