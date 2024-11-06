import { useParams } from 'react-router-dom'
import { usePlacesList } from '../hooks/usePlacesList'
// Components
import Navbar from '../components/Navbar'
import { Places } from '../components/Places'

export default function PlacesPage() {
    const params = useParams()
    const locationId = params.locationId

    const type = params.type
    const { places, isLoading, error } = usePlacesList(locationId)

    return (
        <>
            <Navbar />
            <main>
                <h2>{type.charAt(0).toUpperCase() + type.slice(1)} results</h2>
                {
                    isLoading
                    ? <div>Loading...</div>
                    : <Places places={places} error={error} />
                }
            </main>
        </>
    )
}
