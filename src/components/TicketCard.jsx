// Icons
import { LuTicketCheck } from "react-icons/lu";

export default function TicketCard({ ticket }) {
    return (
        <div className="flex flex-row gap-2 xl:gap-3">
            <div className="basis-1/4 xl:basis-1/5">
                <img className="bg-cover bg-no-repeat aspect-square h-auto min-w-24 w-full rounded-lg" style={{ backgroundImage: `url('${ticket.image_url}')` }} />
            </div>
            <div className="basis-3/4 xl:basis-4/5 flex flex-col gap-1 justify-between">
                <div className="text-xs md:text-sm xl:text-base">
                    <h4 className="font-medium mb-1">{ticket.title}</h4>
                    <p className="font-light">{ticket.price}</p>
                </div>
                <div className="self-end">
                    <a href={ticket.url} target="_blank"
                        className="bg-highlight text-black py-[6px] px-4 rounded-2xl flex items-center gap-1">
                        <span className="text-xs md:text-sm font-medium md:font-normal">
                            Buy ticket
                        </span>
                        <span className="text-base md:text-lg">
                            <LuTicketCheck />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
