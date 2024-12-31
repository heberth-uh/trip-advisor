import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
// Icons
import { IoLocationSharp } from "react-icons/io5";

export default function CityCard({ city }) {
    const navigate = useNavigate()
    const { type } = useContext(MainContext)
    return (
        <div className={`rounded-3xl lg:rounded-2xl overflow-hidden min-w-36 min-h-36 bg-cover bg-no-repeat bg-[20%] relative aspect-square cursor-pointer`}
            style={{ backgroundImage: `url('${city.imageUrl}')` }}
            onClick={() => navigate(`/${type}/results/location/${city.location_id}`)}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/10 to-black/60" />
            <div className="absolute left-0 bottom-0">
                <p className="flex items-start gap-1 pl-3 pr-2 pb-3 md:px-5 md:pb-5 text-white text-xs md:text-base font-medium">
                    <span className="text-xs md:text-base">
                        <IoLocationSharp />
                    </span>
                    <span className="leading-none">
                        {city.full_name}
                    </span>
                </p>
            </div>
        </div>
    )
}
