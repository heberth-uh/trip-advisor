import { useParams } from 'react-router-dom';
// Components
import Reviews from '../components/Reviews.jsx';
import PlaceDetails from '../components/PlaceDetails.jsx';
// Hooks
import { useReviews } from '../hooks/useReviews.js';
import { usePlaceDetails } from '../hooks/usePlaceDetails.js';
import Navbar from '../components/Navbar.jsx';

export default function PlaceDetailsPage() {

    const params = useParams();
    const placeId = params.placeId

    const { place, isLoading, error } = usePlaceDetails(placeId)
    const { reviews, isReviewsLoading } = useReviews(place, placeId)
    // console.log('placeDetails', place)
    // console.log('reviews', reviews)

    return (
        <>
            <Navbar />
            <main>
                {error && <div>{error}</div>}
                {
                    isLoading
                        ? <div>Loading...</div>
                        : <PlaceDetails place={place} />
                }
                {
                    isReviewsLoading
                        ? <div>Loading reviews...</div>
                        : <Reviews reviews={reviews} />
                }
            </main>
        </>
    )
}