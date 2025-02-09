import { useParams } from 'react-router-dom'
import { usePlacesList } from '../hooks/usePlacesList'
// Components
import Navbar from '../components/Navbar'
import { Places } from '../components/Places'
import PlacesSkeleton from '../components/loaders/PlacesSkeleton'

export default function PlacesPage() {
    const params = useParams()
    const locationId = params.locationId
    const { places, isLoading, error } = usePlacesList(locationId)

    return (
        <>
            <Navbar />
            <main className='px-4 pt-4 pb-16 mx-auto container'>
                {
                    isLoading
                    ? <PlacesSkeleton/>
                    : <Places places={places} error={error} />
                }
            </main>
        </>
    )
}
