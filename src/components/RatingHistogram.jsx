// Components
import Heading2 from "./common/Heading2";
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
                        <div key={key} className="flex items-center gap-2 grow">
                            <p className="text-xs text-end font-light w-2">
                                {rating[0].split('_')[1]}
                            </p>
                            <div className="bg-[#EBEBEB] min-w-32 max-w-40 h-[4px] rounded-full overflow-hidden">
                                <div className={`bg-[#C8C8C8] w-[${Math.ceil(100 * parseInt(rating[1]) / parseInt(num_reviews))}%] h-full`} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
