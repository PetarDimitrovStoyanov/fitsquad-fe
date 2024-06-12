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
                    <h3>Предстоящо събитие: <span>Вила Малина - 20-22 септември</span></h3>
                    <p>Искате ли да избягате от градската суета и да се насладите на свеж въздух, физически активности
                        и незабравими преживявания сред природата? Нашият спортен лагер е точно за вас!</p>
                    <a onClick={closeModal} href="#incoming-events">Виж повече</a>
                </div>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}