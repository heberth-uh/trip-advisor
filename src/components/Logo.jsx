import {PiUmbrellaBold } from "react-icons/pi";

export default function Logo() {
    return (
        <a href="/" className='text-primary text-lg lg:text-2xl font-semibold'>
            <h2 className="flex gap-1 items-center justify-center">
                <span className="text-black text-2xl lg:text-3xl rotate-[315deg]">
                    <PiUmbrellaBold />
                </span>
                TripAdvisor
            </h2>
        </a>
    )
}
