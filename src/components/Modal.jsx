// Components
import Button from "./common/Button"
// Icon
import { IoMdClose } from "react-icons/io";


export default function Modal({ modalRef, toggleModal, title, children }) {

    // Close dialog on clicking outside
    const handleToggleModal = (event) => {
        event.preventDefault()
        if (event.currentTarget === event.target) {
            toggleModal(event, modalRef)
        }
    }

    return (
        <dialog ref={modalRef} onClick={handleToggleModal} aria-labelledby="modal-title"
            className="bg-white border-2 border-light-gray rounded-2xl w-screen md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 my-auto">
            <header className="bg-white w-full border-b-[1px] px-6 py-4">
                <div className="flex justify-between items-center">
                    <p className='font-medium text-base'>
                        {title}
                    </p>
                    <button onClick={(event) => toggleModal(event, modalRef)} className="text-black text-2xl lg:text-3xl cursor-pointer" aria-label="Close modal">
                        <IoMdClose />
                    </button>
                </div>
            </header>
            <main className="px-6 overflow-y-auto max-h-[50vh]">
                {children}
            </main>
            <footer className="bg-white w-full border-t-[1px] px-6 py-4">
                <div className="flex justify-end">
                    <div>
                        <Button handleOnclick={(event) => toggleModal(event, modalRef)}>
                            Close
                        </Button>
                    </div>
                </div>
            </footer>
        </dialog>
    )
}