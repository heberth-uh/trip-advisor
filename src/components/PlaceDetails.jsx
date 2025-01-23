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
import Heading2 from "./common/Heading2"
import Booking from "./Booking"
import Offers from "./Offers"
import StarsRating from "./widgets/StarsRating"
// Icons
import { PiClockCountdownBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlineShowChart } from "react-icons/md";

export default function ({ place }) {
    const params = useParams()
    const placeId = params.placeId
    const { reviews, isLoading, error } = useReviews(place, placeId)
    // console.log('reviews', reviews)

    return (
        <section className="flex flex-col gap-10">
            <section className="flex flex-col lg:flex-row lg:flex-wrap gap-y-1">
                <div className="lg:basis-full flex flex-col gap-y-2 lg:flex-row lg:justify-between mb-2">
                    <div className="flex justify-between items-center flex-wrap gap-y-1 gap-x-3">
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

                    <div className="flex justify-between items-center flex-wrap gap-y-1">
                        <StarsRating rate={place.rating} />
                        <span className="text-sm lg:hidden">{place.ranking}</span>
                    </div>
                </div>

                <div className="lg:basis-3/4 lg:pr-6">
                    <img src={place.photo?.images?.large.url} alt={place.name}
                        className="rounded-3xl w-full" />
                </div>

                <div className="lg:basis-1/4 flex flex-col gap-y-3 lg:gap-y-5">
                    <div className="flex justify-between items-center flex-wrap gap-y-2 lg:order-last">
                        {place.price &&
                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                                <span className="text-base">
                                    <MdOutlineShowChart />
                                </span>
                                <p>{place.price}</p>
                            </div>
                        }
                        {place.price_level &&
                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                                <span className="text-base">
                                    <MdOutlineShowChart />
                                </span>
                                <p>{place.price_level}</p>
                            </div>
                        }
                        {place.recommended_visit_length &&
                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                                <PiClockCountdownBold />
                                <p>Duration: {place.recommended_visit_length}</p>
                            </div>
                        }
                    </div>
                    {/* Only for attractions */}
                    {
                        params.type === 'attractions' &&
                        <Offers offers={place.offer_group} />
                    }
                    {/* Only for restaurants */
                        place.reserve_info && <Booking info={place.reserve_info} />
                    }
                </div>

            </section>
            <article>
                <Heading2>About</Heading2>
                <p className="text-base font-extralight leading-7 text-balance mb-3">
                    {place.description}
                </p>
                {place.subcategory &&
                    <div className="flex gap-2 flex-wrap">
                        {place.subcategory && place.subcategory.map(subcategory => (
                            <Tag key={subcategory.key}>#{subcategory.name}</Tag>
                        ))}
                    </div>
                }
                {/* <a href={place.write_review} target='_blank'>Want a write a review?</a> */}
            </article>
            <section>
                <Heading2>More information</Heading2>
                <div className="flex flex-col gap-3 mt-3">
                    <div className="flex items-center gap-2">
                        <span>
                            <IoLocationSharp />
                        </span>
                        <p className="text-sm font-light">{place.address}</p>
                    </div>
                    <a href={`tel:${place.phone}`} className="flex items-center gap-2 text-sm font-light">
                        <span>
                            <FaPhoneAlt />
                        </span>
                        <p>{place.phone}</p>
                    </a>
                    {place.website &&
                        <a href={place.website} className="flex items-center gap-2" target="_blank">
                            <span>
                                <BiWorld />
                            </span>
                            <span className="text-sm font-light break-all">{place.website}</span>
                        </a>
                    }
                </div>
            </section>
            {
                place.hours?.week_ranges &&
                <Hours hours={place.hours} />
            }
            {/* Only for restaurants */}
            {
                params.type === 'restaurants' &&
                <section>
                    <Heading2>Cuisine details</Heading2>
                    <div className="flex flex-col gap-4">
                        {place.cuisine && <Cuisine title={'Cuisines'} cuisine={place.cuisine} />}
                        {place.dietary_restrictions && <Cuisine title={'Special diets'} cuisine={place.dietary_restrictions} />}
                        {place.meal_types && <Cuisine title={'Types of meal'} cuisine={place.meal_types} />}
                        {place.dishes && <Cuisine title={'Dishes'} cuisine={place.dishes} />}
                        {place.sub_cuisine && <Cuisine title={'Sub cuisines'} cuisine={place.sub_cuisine} />}
                    </div>
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