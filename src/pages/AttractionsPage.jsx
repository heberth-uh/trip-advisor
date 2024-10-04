import { useNavigate, useParams } from 'react-router-dom'
import { useAtractions } from '../hooks/useAttractions'

export default function AttractionsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const locationId = params.locationId

    const {attractions} = useAtractions(locationId)
    console.log('attractions', attractions)

    return (
        <main>
            <h2>Attraction results</h2>
            <section>
                {
                    attractions && attractions.map((attraction, key) => (
                        <div key={key} onClick={() => navigate(`/attraction/${attraction.location_id}`)}>
                            <img src={attraction.photo?.images?.small?.url} alt={attraction.photo?.caption} />
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
