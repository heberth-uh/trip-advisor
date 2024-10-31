import { useParams } from "react-router-dom"
import { useReviews } from "../hooks/useReviews"
// Components
import Reviews from "./Reviews"
import Error from "./Error"

export default function ({ place }) {
    const params = useParams()
    const placeId = params.placeId
    const { reviews, isLoading, error } = useReviews(place, placeId)
    // console.log('reviews', reviews)

    return (
        <section>
            <section>
                <h1>{place.name}</h1> <span>{place.ranking}</span>
                <img src={place.photo?.images?.large.url} alt={place.name} />
                <p>{place.rating}</p>
                <p>{place.open_now_text}</p>
                {place.recommended_visit_length &&
                    <div>
                        <p>{place.recommended_visit_length}</p>
                    </div>
                }
            </section>
            <article>
                <div>
                    <h3>About</h3>
                    <p>{place.description}</p>
                </div>
                <div>
                    {
                        place.subcategory && place.subcategory.map(subcategory => (
                            <p key={subcategory.key}>#{subcategory.name}</p>
                        ))
                    }
                    <a href={place.write_review} target='_blank'>Want a write a review?</a>
                </div>
            </article>
            <section>
                <h3>More information</h3>
                <p>address: <span>{place.address}</span></p>
                <p>address: <span>{place.address}</span></p>
                <p>phone: <span>{place.phone}</span></p>
                <p>website: <span>{place.website}</span></p>
            </section>
            {
                isLoading
                    ? <div>Loading...</div>
                    : error
                        ? <Error>{error}</Error>
                        : <Reviews reviews={reviews} />
            }
        </section>
    )
}