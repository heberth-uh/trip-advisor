import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../context/MainContext"

// Icons
import { PiMapPinSimpleFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

export default function LocationCard({ location }) {
    const { type } = useContext(MainContext)
    const navigate = useNavigate()

    return (
        <div className="flex gap-3 cursor-pointer" onClick={() => navigate(`/${type}/results/location/${location.location_id}`)}>
            <div className="rounded-2xl lg:rounded-2xl overflow-hidden min-w-36 min-h-36 bg-cover bg-no-repeat bg-[20%] relative aspect-square"
                style={{ backgroundImage: `url('${location.photo?.images?.large.url}')` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/10 to-black/60" />
                <div className="absolute bottom-0 left-0">
                    <p className="text-white text-sm px-3 pb-2 flex justify-start items-center gap-1">
                        <PiMapPinSimpleFill />
                        {location.subcategory[0].name}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
                <h4 className="text-base font-semibold">
                    {location.name}
                </h4>
                <div className="flex items-start gap-1 text-sm font-light">
                    <span className="self-start">
                        <IoLocationSharp />
                    </span>
                    <p className="leading-none">
                        {location.location_string}
                    </p>
                </div>
            </div>
        </div>
    )
}