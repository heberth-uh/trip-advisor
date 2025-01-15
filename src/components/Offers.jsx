import { useRef } from "react"
// Components
import Button from "./common/Button"
import Modal from "./Modal"
import TicketCard from "./TicketCard"

export default function Offers({ offers }) {

    if (offers.offer_list?.length === 0 && offers.ticket_list?.length === 0) return

    const offersModalRef = useRef()
    const ticketsModalRef = useRef(null)

    const toggleModal = (event, modalRef) => {
        event.preventDefault()
        if (!modalRef.current) return
        modalRef.current.hasAttribute('open')
            ? modalRef.current.close()
            : modalRef.current.showModal()
    }

    return (
        <section className="mt-4">
            <h3 className="text-base font-medium mb-2">Reserve Now</h3>
            <div className="flex flex-cols gap-1">
                {
                    offers.offer_list &&
                    <Button
                        bg={'primary'}
                        handleOnclick={event => toggleModal(event, offersModalRef)}>
                        Show Offers
                    </Button>
                }
                {
                    offers.ticket_list &&
                    <Button
                        bg={'primary'}
                        handleOnclick={event => toggleModal(event, ticketsModalRef)}>
                        Show Tickets
                    </Button>
                }
            </div>

            <Modal
                modalRef={offersModalRef}
                toggleModal={toggleModal}
                title={'Offers'}
                >
                {offers.offer_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />)}
            </Modal>
            <Modal
                modalRef={ticketsModalRef}
                toggleModal={toggleModal}
                title={'Tickets'}
                >
                {offers.ticket_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />)}
            </Modal>
        </section>
    )
}
