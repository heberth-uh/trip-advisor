import { useState } from "react";
import Gallery from "./Gallery"
import StarsRating from "./widgets/StarsRating"
// Icons
import { AiFillLike } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";

export default function ReviewCard({ review }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [answersExpanded, setAnswersExpanded] = useState(false)

    function formatDate(stringDate) {
        let newDate = new Date(stringDate)
        return newDate.toDateString()
    }

    const shortenText = (text, length) => {
        let textArray = text.split(' ')
        if (textArray.length <= length) return text
        return textArray.slice(0, length).join(' ') + '...'
    }

    const toggleExapand = () => {
        setIsExpanded(!isExpanded)
    }


    const toggleExandReviews = () => {
        setAnswersExpanded(!answersExpanded)
    }

    return (
        <article className="flex flex-col gap-y-[10px]">
            {/* Review header */}
            <div className="flex items-center justify-between flex-wrap gap-y-2">
                <div className="flex items-center gap-x-2">
                    <img src={review.user.avatar?.small.url} alt={`${review.username} avatar`}
                        className="rounded-full h-8 w-8" />
                    <p className="text-sm font-light">{review.user.name || review.user.username}</p>
                </div>
                <StarsRating rate={review.rating} />
            </div>
            {/* Review body */}
            <div>
                <h4 className="text-base font-medium mb-1">
                    {review.title}
                </h4>
                <p className="text-base font-extralight leading-6">
                    {isExpanded ? review.text : shortenText(review.text, 30)}
                    {
                        review.text.split(' ').length > 30 &&
                        <span className="text-primary font-normal"
                            onClick={() => toggleExapand()}
                            role="button"
                        >
                            {isExpanded
                                ? <span className=" flex items-center">
                                    Read less <FaAngleUp />
                                </span>
                                : <span className=" flex items-center">
                                    Read more <FaAngleDown />
                                </span>
                            }
                        </span>
                    }
                </p>
            </div>
            {/*Review footer*/}
            <div className="flex items-center justify-between flex-wrap text-[#747474] text-sm font-light">
                <p className="flex items-center gap-1">
                    <AiFillLike />
                    {review.helpful_votes}
                </p>
                <span>
                    {formatDate(review.published_date)}
                </span>
            </div>
            { // Review gallery
                review.photos && <Gallery photos={review.photos} alt={review.title} />
            }
            { // Review answers
                review.owner_response &&
                <div className="mt-2">
                    <span className="text-sm font-light cursor-pointer ml-2 inline-block" onClick={() => toggleExandReviews()}>
                        {answersExpanded
                            ? <span className="flex items-center gap-1"><FaAngleUp/>Hide reviews</span>
                            : <span className="flex items-center gap-1"><FaAngleRight/>Show reviews</span>
                        }
                    </span>
                    <div className={`flex flex-col gap-y-2 border-l-4 border-lighter-gray pl-5 ml-3 mt-2 ${answersExpanded ? 'block' : 'hidden'}`}>
                        <p className="text-base font-medium">
                            {review.owner_response.responder}
                        </p>
                        <p className="text-base font-extralight leading-6">
                            {review.owner_response.text}
                        </p>
                        <p className="text-[#747474] text-sm font-light text-end">
                            {formatDate(review.owner_response.published_date)}
                        </p>
                    </div>
                </div>
            }
            <hr />
        </article>
    )
}