// Components
import StarsRating from "./widgets/StarsRating";

export default function RatingHistogram({ ratings, rating, num_reviews }) {
    return (
        <div>
            <h2 className="font-semibold text-lg text-primary mb-4">
                Summary of reviews
            </h2>

            <div className="flex items-start">
                <div className="flex items-center gap-2">
                    <p className="text-[3rem] font-extralight leading-none">{rating}</p>
                    <div className="flex flex-col justify-between gap-y-1">
                        <StarsRating rate={rating} hideNumber={true} size="lg" />
                        <p className="text-xs font-light">
                            {num_reviews} ratings
                        </p>
                    </div>
                </div>
                <div className="grow">
                    {
                        Object.entries(ratings).map((rating, key) =>
                            <div key={key} className="flex items-center gap-2">
                                <p className="text-xs text-end">
                                    {key + 1}
                                </p>
                                <div className="bg-[#EBEBEB] grow w-10">

                                </div>
                            </div>
                        )
                    }
                    {/* 5 ⭐ <span>{ratings.count_5}</span><br />
                    4 ⭐ <span>{ratings.count_4}</span><br />
                    3 ⭐ <span>{ratings.count_3}</span><br />
                    2 ⭐ <span>{ratings.count_2}</span><br />
                    1 ⭐ <span>{ratings.count_1}</span><br /> */}
                </div>
            </div>
        </div>
    )
}