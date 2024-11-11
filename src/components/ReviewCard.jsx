import Gallery from "./Gallery"

export default function ReviewCard({review }) {

    // this method need to be callable everywhere (hook/useState)
    function formatDate(stringDate) {
        let newDate = new Date(stringDate)
        return newDate.toDateString()
    }

    return (
        <article>
            <div>
                <img src={review.user.avatar?.small.url} alt={`${review.username} avatar`} />
                <div>
                    <p>User: {review.user.name || review.user.username}</p>
                    <p>Rating: {review.rating}</p>
                </div>
                <span>
                    {formatDate(review.published_date)}
                </span>
                <p>Likes: {review.helpful_votes}</p>
            </div>
            <div>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
            </div>
            {
                review.photos && <Gallery photos={review.photos} alt={review.title}/>
            }
            {
                review.owner_response &&
                <div>
                    <p>{review.owner_response.responder}</p>
                    <p>{review.owner_response.text}</p>
                    <p>{formatDate(review.owner_response.published_date)}</p>
                </div>
            }
            <hr />
        </article>
    )
}