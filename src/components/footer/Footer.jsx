import "./footer.scss";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import phone from "./images/phone.svg";
import bgEmpty from "./images/bg.svg";
import email from "./images/email.svg";

export default function Footer() {

    const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/FitSquad123'
    };

    const redirectToInstagram = () => {
        window.location.href = 'https://www.instagram.com/fitsquad23/?igsh=dXE4d2V4bWd5c3Ri'
    }

    return (
        <div className="footer-container" id="contacts">
            <div className="contacts">
                <div className="social-medias">
                    <img src={facebook} onClick={redirectToFacebook} alt="facebook" />
                    <img src={instagram} onClick={redirectToInstagram} alt="instagram" />
                </div>
                <div className="phones">
                    <span>
                        <a href="tel:+359894482455">
                            <p><span><img src={phone} alt="phone"/>+359 894 482 455</span> <span>Чудомир Григоров</span></p>
                        </a>
                    </span>
                    <span>
                        <a href="tel:+359899403456">
                            <p><span><img src={phone} alt="phone"/>+359 899 403 456</span> <span>Ваган Аветисян</span></p>
                        </a>
                    </span>
                    <span className="email">
                        <p>fitsquad23@gmail.com</p>
                    </span>
                </div>
                <div className="map">
                    <img src={bgEmpty} alt="map"/>
                    <p>гр. Пловдив</p>
                </div>
            </div>
        </div>
    )
}