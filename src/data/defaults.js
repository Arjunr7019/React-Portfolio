// Fallback data used ONLY if the backend API is unreachable or returns no data yet.
// Once you add real records through /admin, the site will use the API data instead.
// Image paths here reference the bundled assets in components/img.

import ChatApp from '../components/img/ChatApp.png';
import BloodReport from '../components/img/bloodReport.png';
import onlineCodeEdtior from '../components/img/onlineCodeEdtior.png';
import ProjectMusicApp from '../components/img/projectMusicApp.jpg';
import ProjectToDoList from '../components/img/toDoList.png';
import StopClock from '../components/img/StopClock.png';
import TablenomsSite from '../components/img/TablenomsSite.png';
import WeatherForecast from '../components/img/WeatherForecast.png';
import InstagramReelPostDownloader from '../components/img/InstagramReelPostDownloader.png';

export const DEFAULT_PROJECTS = [
    { id: "projectChatAppt", name: "Chat App (Jelly Fish)", image: ChatApp, apkFile: false, link: 'https://arjunr7019.github.io/chat-app-client/' },
    { id: "projectBloodReport", name: "Blood Report", image: BloodReport, apkFile: false, link: 'https://arjunr7019.github.io/bloodReport/' },
    { id: "projectOnlineCodeEdtior", name: "Online Code Edtior", image: onlineCodeEdtior, apkFile: false, link: 'https://arjunr7019.github.io/online-code-editor/' },
    { id: "projectMusicApp", name: "Music App (React-native)", image: ProjectMusicApp, apkFile: true, apkLink: 'https://drive.google.com/file/d/1nUzvHpzc_HdV8gL42M5-_STdDHYoGdu3/view?usp=sharing', link: 'https://github.com/Arjunr7019/musicApp' },
    { id: "projectToDoList", name: "To Do List", image: ProjectToDoList, apkFile: false, link: 'https://arjunr7019.github.io/to-do-list/' },
    { id: "projectStopClock", name: "Stop Clock", image: StopClock, apkFile: false, link: 'https://arjunr7019.github.io/StopClock/' },
    { id: "projectTablenoms", name: "Tablenoms Site", image: TablenomsSite, apkFile: false, link: 'https://tablenoms.com/' },
    { id: "projectWeather", name: "Weather Forecast", image: WeatherForecast, apkFile: false, link: 'https://arjunr7019.github.io/WeatherForecast/' },
    { id: "projectInstagram", name: "Instagram Reel & Post Downloader", image: InstagramReelPostDownloader, apkFile: false, link: 'https://arjunr7019.github.io/insta-download/' },
];

export const DEFAULT_QUALIFICATIONS = [
    { id: "q1", degree: "MCA", institution: "East West College of Management", address: "Bangalore University, Bangalore - 560091", startYear: "2022", endYear: "2024" },
    { id: "q2", degree: "BSc Electronics", institution: "University of Mysore", address: "Hassan, Holenarasipura - 573211", startYear: "2019", endYear: "2022" },
    { id: "q3", degree: "PUC (PCMB)", institution: "Government Boys Junier College", address: "Hassan, Holenarasipura - 573211", startYear: "2016", endYear: "2018" },
    { id: "q4", degree: "1st to 10th", institution: "Sri Vasvi Vidya Samsthe", address: "Hassan, Holenarasipura - 573211", startYear: "2006", endYear: "2016" },
];

export const DEFAULT_CONTACT_INFO = {
    name: "Arjun R",
    email: "rarjun7019@gmail.com",
    phone: "+91 7019629505",
    linkedin: "https://www.linkedin.com/in/arjun-r-634413236/",
    instagram: "https://www.instagram.com/rgowdaarjun/",
    twitter: "https://twitter.com/ArjunRGowda6",
    github: "https://github.com/Arjunr7019",
};
