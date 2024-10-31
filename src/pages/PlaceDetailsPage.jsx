import { useParams } from 'react-router-dom';
// Components
import PlaceDetails from '../components/PlaceDetails.jsx';
// Hooks
import { usePlaceDetails } from '../hooks/usePlaceDetails.js';
import Navbar from '../components/Navbar.jsx';
import Error from '../components/Error.jsx';

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
                            ? <Error>{error}</Error>
                            : <PlaceDetails place={place} />
                }
            </main>
        </>
    )
}