import { useNavigate } from "react-router-dom"

export default function LocationCard({ location }) {
    const navigate = useNavigate()

    return (
        <article>
            <div onClick={() => navigate(`/location/${location.location_id}`)}>
                <img src={location.photo?.images?.medium.url} alt={location.location_string} />
                <h4>{location.name}</h4>
            </div>
            <p>{location.location_string}</p>
            <p>{location.subcategory[0].name}</p>
            <hr />
        </article>
    )
}