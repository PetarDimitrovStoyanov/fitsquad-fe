import "./style.scss";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Modal from "./components/modal/Modal.jsx";

export default function App() {

    return (
        <>
            <Header />
            <Modal />
            <Home />
            <Footer />
        </>
    )
}