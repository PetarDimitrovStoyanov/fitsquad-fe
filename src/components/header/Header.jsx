import "./header.scss";
import logo from "./images/logo-tr.png";
import close from "./images/close.svg";
import menu from "./images/menu.svg";
import {useRef} from "react";

export default function Header() {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const toggleMenu = () => {
        const classList = document.getElementById('menuOptions').classList
        classList.toggle('active')
        headerRef.current.classList.toggle('active')
        if (classList.contains('active')) {
            menuRef.current.src = close;
            Array.from(document.getElementsByClassName('disable-click')).forEach(element => {
                element.style.zIndex = '1';
            });
        } else {
            menuRef.current.src = menu;
            Array.from(document.getElementsByClassName('disable-click')).forEach(element => {
                element.style.zIndex = '2';
            });
        }
    }


    return (
        <div className="header-container" ref={headerRef}>
            <img src={logo} alt="logo"/>
            <div className="content">
                <div className="burger-img" onClick={toggleMenu}>
                    <img ref={menuRef} src={menu} alt="menu"/>
                </div>
                <div id="menuOptions" className="burger-content">
                    <a href="#about-us" onClick={toggleMenu}>ЗА НАС</a>
                    <a href="#previous-events" onClick={toggleMenu}>ИЗМИНАЛИ СЪБИТИЯ</a>
                    <a href="#incoming-events" onClick={toggleMenu}>ПРЕДСТОЯЩИ СЪБИТИЯ</a>
                    <a href="#contacts" onClick={toggleMenu}>КОНТАКТ</a>
                </div>
            </div>
        </div>
    )
}