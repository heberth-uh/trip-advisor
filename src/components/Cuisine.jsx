export default function Cuisine({ title, cuisine }) {

    const cuisineTypes = cuisine.map(cuisineType => cuisineType.name)
    if (cuisine.length == 0) return

    return (
        <div>
            <h3>{title}</h3>
            <p>
                {
                    cuisineTypes.join(', ')
                }
            </p>
        </div>
    )
}