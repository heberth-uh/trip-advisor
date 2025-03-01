import { useParams } from 'react-router-dom';
// Components
import PlaceDetails from '../components/PlaceDetails.jsx';
// Hooks
import { usePlaceDetails } from '../hooks/usePlaceDetails.js';
import Navbar from '../components/Navbar.jsx';
import Error from '../components/Error.jsx';
import PlaceDetailsSkeleton from '../components/loaders/PlaceDetailsSkeleton.jsx';
import { Footer } from '../components/Footer.jsx';

export default function PlaceDetailsPage() {
    const params = useParams();
    const placeId = params.placeId
    const { place, isLoading, error } = usePlaceDetails(placeId)

    return (
        <>
            <Navbar />
            <main className='px-4 pt-4 pb-16 mx-auto container'>
                {
                    isLoading
                        ? <PlaceDetailsSkeleton/>
                        : error
                            ? <Error>{error}</Error>
                            : <PlaceDetails place={place} />
                }
            </main>
            <Footer/>
        </>
    )
}