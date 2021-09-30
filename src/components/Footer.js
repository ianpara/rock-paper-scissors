import { useState } from "react";
import Modal from "./Modal";

const Footer = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="mt-auto mb-10 text-center lg:text-right lg:mr-10">
            <button onClick={() => setShowModal(prev => (!prev))} className="px-8 py-2 text-white border rounded-lg tracking-widest text-center">RULES</button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </footer>
    );
}

export default Footer;