export default function ImagePlace({ url, imageUrl, children, largeImage = false }) {
    return (
        <a href={url}
            className={`rounded-xl lg:rounded-2xl overflow-hidden min-w-36 min-h-36 lg:min-w-44 lg:min-h-44 ${largeImage && 'xl:min-w-64 xl:min-h-64'} relative`}>
            <div className="bg-cover bg-no-repeat bg-[20%] aspect-square cursor-pointer hover:scale-125 transition-all ease-out duration-500"
                style={{ backgroundImage: `url('${imageUrl}')` }}>
                {children && <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-black/5 to-black/60" />}
            </div>
            <div className="absolute bottom-0 left-0">
                {children}
            </div>
        </a>
    )
}
