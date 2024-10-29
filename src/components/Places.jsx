import PlaceCard from "./PlaceCard"

function NoPlaces() {
    return (
        <div>
            No results found for this location
        </div>
    )
}

function PlacesList({places}) {
    return (
        places.map((place, key) => (
            <PlaceCard key={key} place={place} type={type} />
        ))
    )
}

export function Places({ places, error }) {
    return (
        <section>
            {
                error
                ? <div><i>{error}</i></div> // Must be a component
                :
                    places.legth > 0
                    ? <PlacesList places={places}/>
                    : <NoPlaces/>
            }
        </section>
    )
}