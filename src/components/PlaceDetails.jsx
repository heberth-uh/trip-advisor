import { useParams } from "react-router-dom"
import { useReviews } from "../hooks/useReviews"
// Components
import Reviews from "./Reviews"
import Error from "./Error"
import Amenity from "./Amenity"
import RatingHistogram from "./widgets/RatingHisogram"
import Hours from "./Hours"

export default function ({ place }) {
    const params = useParams()
    const placeId = params.placeId
    const { reviews, isLoading, error } = useReviews(place, placeId)
    // console.log('reviews', reviews)

    return (
        <section>
            <section>
                <h1>{place.name}</h1> <span>{place.ranking}</span>
                <p>{place.rating}</p>
                <p>{place.price_level}</p>
                <img src={place.photo?.images?.large.url} alt={place.name} />
                <p>{place.price}</p>
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
                    <h4>Tags</h4>
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
                <p>phone: <span>{place.phone}</span></p>
                {place.website && <p>website: <span>{place.website}</span></p>}
                {
                    place.hours?.week_ranges && <Hours hours={place.hours} />
                }
            </section>
            {
                place.amenities?.length > 0 &&
                <div>
                    <h3>Amenities</h3>
                    <ul>
                        {place.amenities.map((amenity, key) => (
                            <Amenity key={key} amenity={amenity} />
                        ))}
                    </ul>
                </div>
            }
            {
                place.rating_histogram && <RatingHistogram rating={place.rating_histogram} />
            }
            <hr />
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