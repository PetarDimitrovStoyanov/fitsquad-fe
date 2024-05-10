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
                    <button>Плати</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}