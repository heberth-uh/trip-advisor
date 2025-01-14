import Button from "./common/Button"
import TicketCard from "./TicketCard"

export default function Offers({ offers }) {

    if (offers.offer_list?.length === 0 && offers.ticket_list?.length === 0) return

    return (
        <section>
            <div className="flex flex-cols gap-1">
                {
                    offers.offer_list && <Button bg={'primary'}>Show Offers</Button>
                    // {offers.offer_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />)}
                }
                {
                    offers.ticket_list && <Button bg={'primary'}>Show Tickets</Button>
                    // {offers.ticket_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />)}
                }
            </div>
        </section>
    )
}
