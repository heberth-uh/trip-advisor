export default function Booking({ info }) {
    return (
        <section className="mt-4">
            <div className="flex justify-between items-center">
                <h3 className="text-base font-medium mb-2">
                    Booking
                </h3>
                <img src={info.provider_img} alt={info.provider} className="h-4 lg:h-5 mb-2" />
            </div>
            <a href={info.url} target="_blank" onClick={(e) => e.stopPropagation()}
                className="bg-highlight text-black py-[6px] px-4 rounded-2xl flex justify-center items-center gap-1">
                <span className="text-sm lg:text-base font-medium lg:font-semibold uppercase">
                    {info.button_text}
                </span>
            </a>
        </section>
    )
}
