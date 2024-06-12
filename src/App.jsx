import "./style.scss";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Modal from "./components/modal/Modal.jsx";
import React, { useEffect } from 'react';
export default function App() {

    const openModal = () => {
        document.getElementById('modal').classList.add('active');
    }

    useEffect(() => {
        openModal();
    }, []);

    return (
        <>
            <Header />
            <Modal />
            <Home />
            <Footer />
        </>
    )
}