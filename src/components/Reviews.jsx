import Heading2 from "./common/Heading2"
import ReviewCard from "./ReviewCard"

export default function Reviews({reviews}) {
    return (
        <section className="lg:basis-3/5">
            <Heading2>Reviews</Heading2>
            <div className="flex flex-col gap-y-5 mt-4">
                {
                    reviews && reviews.map(review => (
                        <ReviewCard review={review} key={review.id}/>
                    ))
                }
            </div>
        </section>
    )
}
