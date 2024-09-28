import ReviewCard from "./ReviewCard"

export default function Reviews({reviews}) {
    return (
        <section>
            <h3>Reviews</h3>

            {/* here goes summary rating component (get from ) */}
            
            {
                reviews && reviews.map(review => (
                    <ReviewCard review={review} key={review.id}/>
                ))
            }
        </section>
    )
}