import { useParams } from 'react-router-dom'
import { usePlacesList } from '../hooks/usePlacesList'
// Components
import Navbar from '../components/Navbar'
import { Places } from '../components/Places'

export default function PlacesPage() {
    const params = useParams()
    const locationId = params.locationId
    const { places, isLoading, error } = usePlacesList(locationId)

    return (
        <>
            <Navbar />
            <section>
                {
                    isLoading
                    ? <div>Loading...</div>
                    : <Places places={places} error={error} />
                }
            </section>
        </>
    )
}
