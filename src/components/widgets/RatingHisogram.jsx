export default function RatingHistogram({ ratings, rating, num_reviews }) {
    return (
        <div>
            <p>{num_reviews} ratings</p>
            <p>{rating}</p>
            <div>
                5 ⭐ <span>{ratings.count_5}</span><br />
                4 ⭐ <span>{ratings.count_4}</span><br />
                3 ⭐ <span>{ratings.count_3}</span><br />
                2 ⭐ <span>{ratings.count_2}</span><br />
                1 ⭐ <span>{ratings.count_1}</span><br />
            </div>
        </div>
    )
}