export default function TicketCard({ ticket }) {
    return (
        <div className="flex flex-row py-4 gap-2 mb-2">
            <div className="basis-1/4">
                <img src={ticket.image_url} className="rounded-lg min-w-24" alt={ticket.title} />
            </div>
            <div className="basis-3/4 flex flex-col gap-1 justify-between">
                <h4 className="text-xs font-medium">{ticket.title}</h4>
                {/* <p className="text-xs">{ticket.price}</p> */}
                {/* {ticket.description && <p>{ticket.description}</p>} */}
                {/* <p>
                    <span>Category: </span>{ticket.primary_category}
                </p> */}
                <div className="self-end">
                    <a href={ticket.url} target="_blank" className="bg-black text-white py-1 px-3 rounded-xl text-xs">
                        Buy tickets {ticket.price}
                    </a>
                </div>
            </div>
        </div>
    )
}