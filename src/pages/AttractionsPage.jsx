import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { usePlacesList } from '../hooks/usePlacesList'

export default function AttractionsPage() {
    const params = useParams()
    const locationId = params.locationId

    const { type } = useContext(MainContext)
    const { places, isLoading } = usePlacesList(locationId)

    return (
        <main>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)} results</h2>
            <section>
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    places && places.map((place, key) => (
                        <div key={key}>
                            <Link to={`/${type}/get-details/${place.location_id}`}>
                                <img src={place.photo?.images?.small?.url} alt={place.photo?.caption} />
                            </Link>
                            <p>{place.name}</p>
                            <p>{place.rating}</p>
                            <hr />
                        </div>
                    ))
                }
            </section>
        </main>
    )
}
