import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../context/MainContext"

export default function LocationCard({ location }) {
    const { type } = useContext(MainContext)
    const navigate = useNavigate()

    return (
        <div>
            <div onClick={() => navigate(`/${type}/results/location/${location.location_id}`)}>
                <img src={location.photo?.images?.medium.url} alt={location.location_string} />
                <h4>{location.name}</h4>
            </div>
            <p>{location.location_string}</p>
            <p>{location.subcategory[0].name}</p>
            <hr />
        </div>
    )
}