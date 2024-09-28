export default function ReviewCard({review, }) {
    return (
        <article>
            <div>
                <img src={review.user.avatar?.small.url} alt={`${review.username} avatar`} />
                <div>
                    <p>{review.user.name}</p>
                    <p>{review.rating}</p>
                </div>
                <span>
                    {review.published_date}
                </span>
            </div>
            <div>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
            </div>
            {
                // Here goes replies (if there are)
            }
            <hr />
        </article>
    )
}