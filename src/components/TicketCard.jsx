export default function TicketCard({ ticket }) {
    return (
        <section>
            <h4>{ticket.title}</h4>
            <p>{ticket.price}</p>
            {ticket.description && <p>{ticket.description}</p>}
            <p>
                <span>Category: </span>{ticket.primary_category}
            </p>
            <img src={ticket.image_url} alt={ticket.title} height={80}/>
            <a href={ticket.url} target="_blank">Buy tickets</a>
        </section>
    )
}