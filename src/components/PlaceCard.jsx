import { Link, useParams } from 'react-router-dom'

export default function PlaceCard({ place }) {
    const params = useParams()
    const type = params.type
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