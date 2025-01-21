import Heading3 from "./common/Heading3"

export default function Cuisine({ title, cuisine }) {

    const cuisineTypes = cuisine.map(cuisineType => cuisineType.name)
    if (cuisine.length == 0) return

    return (
        <div>
            <Heading3>{title}</Heading3>
            <p className="text-base font-extralight leading-none">
                {cuisineTypes.join(', ')}
            </p>
        </div>
    )
}
