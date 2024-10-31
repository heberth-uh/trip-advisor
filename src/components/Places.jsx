import PlaceCard from "./PlaceCard"
import Error from "./Error"

function NoPlaces() {
    return (
        <div>
            No results found for this location
        </div>
    )
}

function PlacesList({ places }) {
    return (
        places.map((place, key) => (
            <PlaceCard key={key} place={place} />
        ))
    )
}

export function Places({ places, error }) {
    return (
        <section>
            {
                error
                    ? <Error>{error}</Error> // Must be a component
                    :
                    places.length > 0
                        ? <PlacesList places={places} />
                        : <NoPlaces />
            }
        </section>
    )
}