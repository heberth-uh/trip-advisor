import ReviewCard from "./ReviewCard"

export default function Reviews({reviews}) {
    return (
        <section>
            <h2>Reviews</h2>

            {
                reviews && reviews.map(review => (
                    <ReviewCard review={review} key={review.id}/>
                ))
            }
        </section>
    )
}