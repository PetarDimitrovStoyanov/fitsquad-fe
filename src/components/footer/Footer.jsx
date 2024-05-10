import "./footer.scss";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import phone from "./images/phone.svg";
import bgEmpty from "./images/bg.svg";

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
                        {/*<img src={phone} alt="phone"/>*/}
                        <a href="tel:+359888022053">
                            <p><span><img src={phone} alt="phone"/>+359 888 022 053</span> <span>Чудомир Григоров</span></p>
                        </a>
                        {/*<p>Чудомир Григоров</p>*/}
                    </span>
                    <span>
                        {/*<img src={phone} alt="phone"/>*/}
                        <a href="tel:+359888888888">
                            <p><span><img src={phone} alt="phone"/>+359 888 888 888</span> <span>Ваган</span></p>
                        </a>
                        {/*<p>Ваган</p>*/}
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