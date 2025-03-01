// Components
import Heading2 from "./common/Heading2";
import ProgressBar from "./common/ProgressBar";
import StarsRating from "./widgets/StarsRating";

export default function RatingHistogram({ ratings, rating, num_reviews }) {
    const sort_ratings = Object.entries(ratings).reverse() // Get the sorted descending array of ratings
    return (
        <div>
            <Heading2>Summary of reviews</Heading2>
            <div className="flex items-start gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                    <p className="text-[3rem] font-extralight leading-none">{rating}</p>
                    <div className="flex flex-col justify-between gap-y-1">
                        <StarsRating rate={rating} hideNumber={true} size="lg" />
                        <p className="text-xs font-light">
                            {num_reviews} ratings
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[2px]">
                    {Object.values(sort_ratings).map((rating, key) =>
                        <ProgressBar key={key} rating={rating} num_reviews={num_reviews} />
                    )}
                </div>
            </div>
        </div>
    )
}
