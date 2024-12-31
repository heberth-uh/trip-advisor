import { Link, useParams } from 'react-router-dom'

export default function PlaceCard({ place, simpleView = false }) {
    const params = useParams()
    const type = params.type
    return (
        <div>
            <Link to={`/${type}/get-details/${place.location_id}`}>
                <img src={place.photo?.images?.medium?.url} alt={place.photo?.caption}
                className='rounded-xl w-[250px] h-[150px] min-w-[220px] min-h-[120px]'/>
            </Link>
            <p className='text-base font-semibold'>
                {place.name}
            </p>
            <p className={`${simpleView && 'hidden'}`}>
                {place.description}
            </p>
            {
                place.rating && <p>⭐ {place.rating}</p>
            }
            <p>{place.price}</p>
            <p>{place.open_now_text}</p>
            {
                type === 'hotels'
                    ? <p>📍 {place.location_string}</p>
                    : <p>📍 {place.address_obj?.street1 || place.address_obj?.street2}, {place.address_obj?.postalcode}</p>
            }
            <hr />
        </div>
    )
}