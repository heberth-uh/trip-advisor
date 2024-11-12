import TicketCard from "./TickerCard"

export default function Offers({ offers }) {

    if (offers.offer_list?.length === 0 && offers.ticket_list?.length === 0) return

    return (
        <section>
            {
                offers.offer_list &&
                <div>
                    <h2>Offers</h2>
                    { offers.offer_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />) }
                </div>
            }
            {
                offers.ticket_list &&
                <div>
                    <h2>Tickets</h2>
                    { offers.ticket_list.map(offer => <TicketCard key={offer.product_code} ticket={offer} />) }
                </div>
            }
        </section>
    )
}