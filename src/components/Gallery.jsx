// Ant Components
import { Image } from "antd";

export default function Gallery({ photos, alt }) {
    return (
        <section className="flex gap-2">
            <Image.PreviewGroup
            >
                <div className="flex gap-1 flex-wrap">
                    {
                        photos.map((photo, key) => (
                            <Image key={key} src={photo.images.large.url} width={60} height={60} alt={`${alt} photo ${key + 1}`}/>
                        ))
                    }
                </div>
            </Image.PreviewGroup>
        </section>
    )
}
