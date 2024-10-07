import { Link, useParams } from 'react-router-dom'
import { useAtractions } from '../hooks/useAttractions'
import { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export default function AttractionsPage() {
    const params = useParams()
    const locationId = params.locationId

    const { type } = useContext(MainContext)
    const { attractions, isLoading } = useAtractions(locationId)
    console.log('attractions', attractions)

    return (
        <main>
            <h2>Attraction results</h2>
            <section>
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    attractions && attractions.map((attraction, key) => (
                        <div key={key}>
                            <Link to={`/${type}/get-details/${attraction.location_id}`}>
                                <img src={attraction.photo?.images?.small?.url} alt={attraction.photo?.caption} />
                            </Link>
                            <p>{attraction.name}</p>
                            <p>{attraction.rating}</p>
                            <hr />
                        </div>
                    ))
                }
            </section>
        </main>
    )
}
