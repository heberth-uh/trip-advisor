import { useParams } from "react-router-dom"
import { useReviews } from "../hooks/useReviews"
// Components
import Reviews from "./Reviews"
import Error from "./Error"
import Amenity from "./Amenity"
import RatingHistogram from "./widgets/RatingHisogram"
import Hours from "./Hours"
import Cuisine from "./Cuisine"
import Tag from "./widgets/Tag"
import Booking from "./Booking"
import Offers from "./Offers"

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
                    <h2>About</h2>
                    <p>{place.description}</p>
                </div>
                {place.subcategory &&
                    <div>
                        <h3>Tags</h3>
                        {
                            place.subcategory && place.subcategory.map(subcategory => (
                                <Tag key={subcategory.key}>{subcategory.name}</Tag>
                            ))
                        }
                    </div>
                }
                <a href={place.write_review} target='_blank'>Want a write a review?</a>
            </article>
            {
                place.reserve_info && <Booking info={place.reserve_info}/>
            }
            <section>
                <h2>More information</h2>
                <p>address: <span>{place.address}</span></p>
                <p>phone: <span>{place.phone}</span></p>
                {place.website && <p>website: <span>{place.website}</span></p>}
                {
                    place.hours?.week_ranges && <Hours hours={place.hours} />
                }
            </section>
            {/* Only for attractions */}
            {
                params.type === 'attractions' &&
                <Offers offers={place.offer_group} />
            }

            {/* Only for restaurants */}
            {
                params.type === 'restaurants' &&
                <section>
                    <h2>Cuisine details</h2>
                    {place.cuisine && <Cuisine title={'Cuisines'} cuisine={place.cuisine} />}
                    {place.dietary_restrictions && <Cuisine title={'Special diets'} cuisine={place.dietary_restrictions} />}
                    {place.meal_types && <Cuisine title={'Types of meal'} cuisine={place.meal_types} />}
                    {place.dishes && <Cuisine title={'Dishes'} cuisine={place.dishes} />}
                    {place.sub_cuisine && <Cuisine title={'Sub cuisines'} cuisine={place.sub_cuisine} />}
                </section>
            }
            {
                // Only for hotels
                place.amenities?.length > 0 &&
                <div>
                    <h2>Amenities</h2>
                    <ul>
                        {place.amenities.map((amenity, key) => (
                            <Amenity key={key} amenity={amenity} />
                        ))}
                    </ul>
                </div>
            }
            {
                place.rating_histogram && <RatingHistogram ratings={place.rating_histogram} rating={place.rating} num_reviews={place.num_reviews}/>
            }
            <hr />
            {
                // Reviews
                isLoading
                    ? <div>Loading...</div>
                    : error
                        ? <Error>{error}</Error>
                        : <Reviews reviews={reviews} />
            }
        </section>
    )
}