import Gallery from "./Gallery"
import StarsRating from "./widgets/StarsRating"
// Icons
import { AiFillLike } from "react-icons/ai";

export default function ReviewCard({ review }) {

    // this method need to be callable everywhere (hook/useState)
    function formatDate(stringDate) {
        let newDate = new Date(stringDate)
        return newDate.toDateString()
    }

    return (
        <article className="flex flex-col gap-y-[10px]">
            <div className="flex items-center justify-between flex-wrap gap-y-2">
                <div className="flex items-center gap-x-2">
                    <img src={review.user.avatar?.small.url} alt={`${review.username} avatar`}
                        className="rounded-full h-8 w-8" />
                    <p className="text-sm font-light">{review.user.name || review.user.username}</p>
                </div>
                <StarsRating rate={review.rating} />
            </div>
            <div>
                <h4 className="text-base font-medium mb-1">
                    {review.title}
                </h4>
                <p className="text-base font-extralight leading-6">
                    {review.text}
                </p>
            </div>
            <div className="flex items-center justify-between flex-wrap text-[#747474] text-sm font-light">
                <p className="flex items-center gap-1">
                    <AiFillLike />
                    {review.helpful_votes}
                </p>
                <span>
                    {formatDate(review.published_date)}
                </span>
            </div>
            {
                review.photos && <Gallery photos={review.photos} alt={review.title} />
            }
            {
                review.owner_response &&
                <div className="flex flex-col gap-y-2 border-l-4 border-lighter-gray pl-5 ml-10">
                    <p className="text-sm font-medium">
                        {review.owner_response.responder}
                    </p>
                    <p className="text-sm font-extralight leading-6">
                        {review.owner_response.text}
                    </p>
                    <p className="text-[#747474] text-sm font-light text-end">
                        {formatDate(review.owner_response.published_date)}
                    </p>
                </div>
            }
            <hr />
        </article>
    )
}