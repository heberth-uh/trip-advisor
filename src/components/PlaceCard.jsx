import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainContext'

export default function PlaceCard({ place }) {
    const { type } = useContext(MainContext)
    return (
        <div>
            <Link to={`/${type}/get-details/${place.location_id}`}>
                <img src={place.photo?.images?.small?.url} alt={place.photo?.caption} />
            </Link>
            <p>{place.name}</p>
            <p>⭐ {place.rating}</p>
            <p>{place.price}</p>
            <p>{place.open_now_text}</p>
            {
                type === 'hotels'
                    ? <p>📍 {place.location_string}</p>
                    : <p>📍 {place.address_obj?.street1}, {place.address_obj?.postalcode}</p>
            }
            <hr />
        </div>
    )
}