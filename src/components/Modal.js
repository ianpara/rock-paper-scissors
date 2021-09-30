import { useRef } from 'react';
import baseRules from '../images/image-rules.svg';

const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    return (
        <>
            {showModal === true &&


                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="rules" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen h-full sm:h-auto sm:pt-4 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">

                        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" aria-hidden="true"></div>

                        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block p-8 h-full align-bottom bg-white md:rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">


                            <div className="flex flex-wrap items-center md:items-start justify-between h-full">
                                <h2 className="text-4xl font-bold text-dark mx-auto sm:mx-0">RULES</h2>
                                <div className="w-11/12 mx-auto sm:order-3 sm:mt-10 w-full">
                                    <img className="w-full" src={baseRules} alt="Rock beats scissors, scissors beats paper, paper beats rock" />
                                </div>
                                <div className="sm:order-2 mx-auto sm:mx-0">
                                    <button onClick={() => setShowModal(prev => (!prev))}>
                                        <svg
                                            className="w-8 h-8 opacity-50"
                                            fill="none"
                                            stroke="hsl(217, 16%, 45%)"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;