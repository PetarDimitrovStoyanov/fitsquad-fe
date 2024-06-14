import "./home.scss";
import PreviousEvents from "../../components/previousEvents/PreviousEvents.jsx";
import IncomingEvents from "../../components/incomingEvents/IncomingEvents.jsx";
import AboutUs from "../../components/aboutUs/AboutUs.jsx";
import videoBg from "../home/video/hero-compressed.mp4";
import ArrowDown from "../../components/arrowDown/ArrowDown.jsx";

export default function Home() {

    const redirectTo = () => {
        const element = document.getElementById('incoming-events');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="home-page-container">
            <div className="video-container">
                <video src={videoBg} autoPlay muted loop />
                <ArrowDown redirectTo={redirectTo} text="Съчетай спорт, здраве и забавление" />
            </div>
            <AboutUs />
            <PreviousEvents />
            <IncomingEvents />
        </div>
    )
}