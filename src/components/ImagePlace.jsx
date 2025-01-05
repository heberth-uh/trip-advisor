import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";

export default function ImagePlace({ location_id, imageUrl, children }) {
    const navigate = useNavigate()
    const { type } = useContext(MainContext)
    return (
        <a href={`/${type}/results/location/${location_id}`}
            className="rounded-xl lg:rounded-2xl overflow-hidden min-w-36 min-h-36 lg:min-w-44 lg:min-h-44 relative">
            <div className="bg-cover bg-no-repeat bg-[20%] aspect-square cursor-pointer hover:scale-110 transition-all ease-out duration-300"
                style={{ backgroundImage: `url('${imageUrl}')` }}
                onClick={() => navigate(`/${type}/results/location/${location_id}`)}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/5 to-black/60" />
            </div>
            <div className="absolute bottom-0 left-0">
                {children}
            </div>
        </a>
    )
}
