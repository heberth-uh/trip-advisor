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
        <dialog ref={modalRef} onClick={handleToggleModal}
            className="bg-white border-2 border-light-gray rounded-2xl max-h-[60vh] lg:w-1/3 my-auto overflow-hidden">
            <section className="sticky bottom-0 left-0 bg-white w-full border-b-[1px] px-6 py-4">
                <div className="flex justify-between items-center">
                    <p className='font-medium text-base'>
                        {title}
                    </p>
                    <span onClick={(event) => toggleModal(event, modalRef)} className="text-black text-2xl lg:text-3xl cursor-pointer">
                        <IoMdClose />
                    </span>
                </div>
            </section>
            <section className="px-6 doverflow-y-auto">
                {children}
            </section>
            <section className="sticky bottom-0 left-0 bg-white w-full border-t-[1px] px-6 py-4">
                <div className="flex justify-end">
                    <Button handleOnclick={(event) => toggleModal(event, modalRef)}>
                        Close
                    </Button>
                </div>
            </section>
        </dialog>
    )
}