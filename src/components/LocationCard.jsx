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
        <div className="flex gap-3 lg:gap-4">
            <a href={`/${type}/results/location/${location.location_id}`} className="rounded-2xl lg:rounded-2xl overflow-hidden min-w-36 min-h-36 lg:min-w-44 lg:min-h-44 relative">
                <div className="bg-cover bg-no-repeat bg-[20%] aspect-square cursor-pointer hover:scale-110 transition-all ease-out duration-300"
                    style={{ backgroundImage: `url('${location.photo?.images?.large.url}')` }}
                    onClick={() => navigate(`/${type}/results/location/${location.location_id}`)}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/5 to-black/60" />
                </div>
                <div className="absolute bottom-0 left-0">
                    <p className="text-white text-sm px-3 pb-2 flex justify-start items-center gap-1">
                        <PiMapPinSimpleFill />
                        {location.subcategory[0].name}
                    </p>
                </div>
            </a>

            <div className="flex flex-col justify-start gap-1">
                <a href={`/${type}/results/location/${location.location_id}`}>
                    <h4 className="text-base lg:text-lg font-semibold cursor-pointer hover:underline">
                        {location.name}
                    </h4>
                </a>
                <div className="flex items-start gap-1 font-light">
                    <span className="self-start lg:self-center">
                        <IoLocationSharp />
                    </span>
                    <p className="text-sm lg:text-base leading-none">
                        {location.location_string}
                    </p>
                </div>
            </div>
        </div>
    )
}
