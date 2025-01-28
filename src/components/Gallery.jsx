export default function Gallery({ photos, alt }) {
    // it need a dialog to show each photo in high quality, date and user
    console.log(photos)
    const photosList = photos.length > 4 ? photos.slice(0, 3) : photos
    return (
        <section className="flex gap-2">
            {
                photosList.map((photo, key) => (
                    <div key={photo.id}
                        alt={`${alt} photo ${key + 1}`}
                        className="h-[60px] w-[60px] rounded-md cursor-pointer"
                        style={{ backgroundImage: `url('${photo.images.small.url}')` }}
                    />
                ))
            }
            {
                photos.length > 3 &&
                <div key={photos[3].id}
                    alt={`${alt} see more`}
                    className="h-[60px] w-[60px] rounded-md overflow-hidden cursor-pointer"
                    style={{ backgroundImage: `url('${photos[3].images.small.url}')` }}
                >
                    <div className="w-full h-full text-sm flex items-center justify-center text-white bg-gray-800/40">
                        + {photos.length - 3}
                    </div>
                </div>
            }
        </section>
    )
}