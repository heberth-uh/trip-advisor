import ReviewCard from "./ReviewCard"

export default function Reviews({reviews}) {
    return (
        <section>
            <h3>Reviews</h3>

            {
                reviews && reviews.map(review => (
                    <ReviewCard review={review} key={review.id}/>
                ))
            }
        </section>
    )
}