import { useParams } from 'react-router-dom';
// Components
import Reviews from '../components/Reviews.jsx';
// Hooks
import { useReviews } from '../hooks/useReviews.js';
import { useAttraction } from '../hooks/useAttraction.js';

export default function AttractionDetailsPage() {

    const params = useParams();
    const placeId = params.placeId

    const { attraction } = useAttraction(placeId)
    const { reviews } = useReviews(attraction)
    console.log('attractionDetails', attraction)
    console.log('reviews', reviews)

    return (
        <main>
            <section>
                <section>
                    <h1>{attraction.name}</h1> <span>{attraction.ranking}</span>
                    <img src={attraction.photo?.images?.large.url} alt={attraction.name} />
                    <p>{attraction.rating}</p>
                    <p>{attraction.open_now_text}</p>
                    {attraction.recommended_visit_length &&
                        <div>
                            <p>{attraction.recommended_visit_length}</p>
                        </div>
                    }
                </section>
                <article>
                    <div>
                        <h3>About</h3>
                        <p>{attraction.description}</p>
                    </div>
                    <div>
                        {
                            attraction.subcategory && attraction.subcategory.map(subcategory => (
                                <p key={subcategory.key}>#{subcategory.name}</p>
                            ))
                        }
                        <a href={attraction.write_review} target='_blank'>Want a write a review?</a>
                    </div>
                </article>
                <section>
                    <h3>More information</h3>
                    <p>address: <span>{attraction.address}</span></p>
                    <p>address: <span>{attraction.address}</span></p>
                    <p>phone: <span>{attraction.phone}</span></p>
                    <p>website: <span>{attraction.website}</span></p>
                </section>
                <Reviews reviews={reviews} />
            </section>
        </main>
    )
}