import { useParams } from "react-router-dom"
import { useReviews } from "../hooks/useReviews"
// Components
import Reviews from "./Reviews"
import Error from "./Error"
import Amenity from "./Amenity"
import RatingHistogram from "./RatingHistogram"
import Hours from "./Hours"
import Cuisine from "./Cuisine"
import Tag from "./common/Tag"
import Booking from "./Booking"
import Offers from "./Offers"
import StarsRating from "./widgets/StarsRating"
// Icons
import { PiClockCountdownBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export default function ({ place }) {
    const params = useParams()
    const placeId = params.placeId
    const { reviews, isLoading, error } = useReviews(place, placeId)
    // console.log('reviews', reviews)

    return (
        <section className="flex flex-col gap-10">
            <section>
                <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-between">
                    <div className="flex justify-between items-center gap-x-3">
                        <h1 className="text-lg font-semibold">
                            {place.name}
                        </h1>
                        <div className="flex">
                            {place.open_now_text &&
                                <Tag bg={'bg-highlight'}>
                                    {place.open_now_text}
                                </Tag>
                            }
                        </div>
                        <span className="text-base hidden lg:block">{place.ranking}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <StarsRating rate={place.rating} />
                        <span className="text-sm lg:hidden">{place.ranking}</span>
                    </div>
                </div>

                <p>{place.price_level}</p>
                <img src={place.photo?.images?.large.url} alt={place.name}
                    className="rounded-3xl w-full" />
                <p>{place.price}</p>
                {place.recommended_visit_length &&
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <PiClockCountdownBold />
                        <p>Duration: {place.recommended_visit_length}</p>
                    </div>
                }
            </section>
            <article>
                <h2 className="font-semibold text-lg text-primary mb-2">About</h2>
                <p className="text-base font-extralight leading-7 text-balance mb-2">
                    {place.description}
                </p>
                {place.subcategory &&
                    <div className="flex gap-2">
                        {place.subcategory && place.subcategory.map(subcategory => (
                            <Tag key={subcategory.key}>#{subcategory.name}</Tag>
                        ))}
                    </div>
                }
                {/* <a href={place.write_review} target='_blank'>Want a write a review?</a> */}
            </article>
            {
                place.reserve_info && <Booking info={place.reserve_info} />
            }
            <section>
                <h2 className="font-semibold text-lg text-primary mb-2">
                    More information
                </h2>

                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2 leading-none">
                        <IoLocationSharp />
                        <p className="text-sm font-light">{place.address}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm font-light leading-none">
                        <FaPhoneAlt />
                        <p>{place.phone}</p>
                    </div>
                    {place.website &&
                        <div className="flex items-start gap-2 leading-none">
                            <BiWorld />
                            <p className="text-sm font-light">{place.website}</p>
                        </div>
                    }
                </div>
            </section>
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
                place.rating_histogram && <RatingHistogram ratings={place.rating_histogram} rating={place.rating} num_reviews={place.num_reviews} />
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