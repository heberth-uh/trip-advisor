export default function Gallery({photos, alt}) {
    // it need a dialog to show each photo in high quality, date and user
    return (
        <section>
            <p>Photos:</p>
            {
                photos.map( (photo, key) => (
                    <img key={photo.id} src={photo.images.small.url} alt={`${alt} photo ${key+1}`} />
                ))
            }
        </section>
    )
}