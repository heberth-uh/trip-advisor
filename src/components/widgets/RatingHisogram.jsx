export default function RatingHistogram({ rating }) {
    return (
        <div>
            5 ⭐ <span>{rating.count_5}</span><br />
            4 ⭐ <span>{rating.count_4}</span><br />
            3 ⭐ <span>{rating.count_3}</span><br />
            2 ⭐ <span>{rating.count_2}</span><br />
            1 ⭐ <span>{rating.count_1}</span><br />
        </div>
    )
}