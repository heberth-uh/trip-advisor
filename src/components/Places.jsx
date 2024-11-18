import { useParams } from "react-router-dom"
// Components
import PlaceCard from "./PlaceCard"
import Error from "./Error"
import NoResults from "./NoResults"

function PlacesList({ places }) {
    const params = useParams()
    const type = params.type
    const ancestor = places[0].ancestors[0]?.name
    const locationName = ancestor ? ` in ${ancestor}` : ''
    return (
        <main>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)} results{locationName}</h2>
            <div>
                {places.map((place, key) => <PlaceCard key={key} place={place} />)}
            </div>
        </main>
    )
}

export function Places({ places, error }) {
    return (
        <section>
            {
                error
                    ? <Error>{error}</Error>
                    : places.length > 0
                        ? <PlacesList places={places} />
                        : <NoResults message={'No results found for this location'} />
            }
        </section>
    )
}