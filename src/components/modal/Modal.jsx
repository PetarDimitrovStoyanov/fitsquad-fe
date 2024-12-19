import "./modal.scss"
import ReactDOM from "react-dom";
import close from "../header/images/close.svg";

export default function Modal() {

    const closeModal = () => {
        document.getElementById('modal').classList.toggle('active');
    }

    return ReactDOM.createPortal(
        <div className="modal" id="modal">
            <div className="modal-content">
                <img className="img-close-modal" src={close} alt="close" onClick={closeModal}/>
                <div className="content-portal">
                    {/*<button>Плати</button>*/}
                    <h3><span>СПОРТЕН ЛАГЕР – МАГИЯТА НА ИСПАНИЯ</span></h3>
                    <p>Дестинация: Малага, Испания.</p>
                    <p>Уникално съчетание от активна почивка, културни открития и релаксация на Средиземно море.</p>
                    <p>25 – 29 март 2024 г. (4 нощувки)</p>
                    <a onClick={closeModal} href="#incoming-events">Виж повече</a>
                </div>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}