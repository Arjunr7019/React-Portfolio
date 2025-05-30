import React from 'react';
import '../../App.css';
import WeatherForecast from '../img/WeatherForecast.png';
import TablenomsSite from '../img/TablenomsSite.png';
import StopClock from '../img/StopClock.png';
import onlineCodeEdtior from '../img/onlineCodeEdtior.png';
import InstagramReelPostDownloader from '../img/InstagramReelPostDownloader.png';
import ProjectMusicApp from '../img/projectMusicApp.jpg';
import ProjectBloodReport from '../img/bloodReport.png';
import ProjectToDoList from '../img/toDoList.png';
import ProjectChatApp from '../img/ChatApp.png';

export default function Projects() {
    
    const projects = [
        {
            name: "Chat App (Jelly Fish)",
            image: ProjectChatApp,
            id: "projectChatAppt",
            apkFile: false,
            link: 'https://arjunr7019.github.io/chat-app-client/'
        },
        {
            name: "Blood Report",
            image: ProjectBloodReport,
            id: "projectBloodReport",
            apkFile: false,
            link: 'https://arjunr7019.github.io/bloodReport/'
        },
        {
            name: "Online Code Edtior",
            image: onlineCodeEdtior,
            id: "projectOnlineCodeEdtior",
            apkFile: false,
            link: 'https://arjunr7019.github.io/online-code-editor/'
        },
        {
            name: "Music App (React-native)",
            image: ProjectMusicApp,
            id: "projectMusicApp",
            apkFile: true, apkLink: 'https://drive.google.com/file/d/1nUzvHpzc_HdV8gL42M5-_STdDHYoGdu3/view?usp=sharing',
            link: 'https://github.com/Arjunr7019/musicApp'
        },
        {
            name: "To Do List",
            image: ProjectToDoList,
            id: "projectToDoList",
            apkFile: false,
            link: 'https://arjunr7019.github.io/to-do-list/'
        },
        {
            name: "Stop Clock",
            image: StopClock,
            id: "projectStopClock",
            apkFile: false,
            link: 'https://arjunr7019.github.io/StopClock/'
        },
        {
            name: "Tablenoms Site",
            image: TablenomsSite,
            id: "projectTablenoms",
            apkFile: false,
            link: 'https://tablenoms.com/'
        },
        {
            name: "Weather Forecast",
            image: WeatherForecast,
            id: "projectWeather",
            apkFile: false,
            link: 'https://arjunr7019.github.io/WeatherForecast/'
        },
        {
            name: "Instagram Reel & Post Downloader",
            image: InstagramReelPostDownloader,
            id: "projectInstagram",
            apkFile: false,
            link: 'https://arjunr7019.github.io/insta-download/'
        },
    ]
    return (
        <div id="spyProjects" className='default-margin-x-y d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold mb-5'>Projects</h1>
            <div className='width-100 d-flex justify-content-around align-items-start flex-row flex-wrap mb-lg-4'>
                {projects.map((data) =>
                    <div key={data.id} className="card border-light mb-3">
                        <img src={data.image} className="card-img-top" alt="ProjectImage" />
                        <div className="card-body d-flex justify-content-start align-items-start flex-column">
                            <h5 className="card-title fw-bold pb-2">{data.name}</h5>
                            <div className='w-100 d-flex justify-content-between'>
                                <a href='/' onClick={(e)=> { e.preventDefault(); window.location.href=data.link}} id={data.id} className="btn-for-projects">Checkout</a>
                                {data.apkFile ? <a href='/' onClick={(e)=> { e.preventDefault(); window.location.href=data.apkLink}} id={data.id} className="btn-for-projects">APK File</a> : <></>}
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
