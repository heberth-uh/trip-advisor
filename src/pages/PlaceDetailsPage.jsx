import { useParams } from 'react-router-dom';
// Components
import PlaceDetails from '../components/PlaceDetails.jsx';
// Hooks
import { usePlaceDetails } from '../hooks/usePlaceDetails.js';
import Navbar from '../components/Navbar.jsx';

export default function PlaceDetailsPage() {

    const params = useParams();
    const placeId = params.placeId

    const { place, isLoading, error } = usePlaceDetails(placeId)
    // console.log('placeDetails', place)

    return (
        <>
            <Navbar />
            <main>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : error
                            ? <div>{error}</div>
                            : <PlaceDetails place={place} />
                }
            </main>
        </>
    )
}