export default function Modal({ modalRef, toggleModal, children }) {

    // Close dialog on clicking outside
    const handleToggleModal = (event) => {
        event.preventDefault()
        if (event.currentTarget === event.target ) {
            toggleModal(event, modalRef)
        }
    }

    return (
        <dialog ref={modalRef} onClick={handleToggleModal}>
            <section>
                {children}
            </section>
            <section onClick={(event) => toggleModal(event, modalRef)}>
                <button>Close</button>
            </section>
        </dialog>
    )
}