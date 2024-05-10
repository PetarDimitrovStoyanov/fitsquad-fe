import "./arrowDown.scss";

export default function ArrowDown({redirectTo, text}) {
    return (
        <div className="arrows-wrapper" onClick={redirectTo}>
            <h6 className="reference-text">{text}</h6>
            {/*<div className="arrows-container" onClick={redirectTo}>*/}
            <div className="arrows-container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </div>
    )
}