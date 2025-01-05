import { useContext } from "react"
import { MainContext } from "../context/MainContext"
// Components
import CityCard from "./Home/CityCard";
// Icons
import { PiMapPinSimpleFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

export default function LocationCard({ location }) {
    const { type } = useContext(MainContext)

    return (
        <div className="flex gap-3 lg:gap-4">
            <CityCard location_id={location.location_id} imageUrl={location.photo?.images?.large.url}>
                <p className="text-white text-sm px-3 pb-2 flex justify-start items-center gap-1">
                    <PiMapPinSimpleFill />
                    {location.subcategory[0].name}
                </p>
            </CityCard>
            <div className="flex flex-col justify-start gap-1">
                <a href={`/${type}/results/location/${location.location_id}`}>
                    <h4 className="text-base lg:text-lg font-semibold cursor-pointer hover:underline">
                        {location.name}
                    </h4>
                </a>
                <div className="flex items-start gap-1 font-light">
                    <span className="text-sm lg:text-base self-start lg:self-center">
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
