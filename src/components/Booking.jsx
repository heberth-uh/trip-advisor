import Heading3 from "./common/Heading3";

export default function Booking({ info }) {
    return (
        <section>
            <div className="flex justify-between items-center">
                <Heading3>Booking</Heading3>
                <img src={info.provider_img} alt={info.provider} className="h-4 mb-2" />
            </div>
            <a href={info.url} target="_blank" onClick={(e) => e.stopPropagation()}
                className="bg-highlight text-black py-[6px] lg:py-[10px] px-4 lg:px-5 rounded-full flex justify-center items-center gap-1">
                <span className="text-sm lg:text-base font-medium lg:font-semibold uppercase">
                    {info.button_text}
                </span>
            </a>
        </section>
    )
}
