import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MainContext } from "../context/MainContext"
// Components
import PlaceCard from "./PlaceCard"
import Error from "./Error"
import NoResults from "./NoResults"
import SelectionField from "./widgets/SelectionField"

function PlacesList({ places }) {
    const params = useParams()
    const type = params.type
    const ancestor = places[0].ancestors[0]?.name
    const locationName = ancestor ? ` in ${ancestor}` : ''

    const { sortPlaces, setSortPlaces, sortPlacesList, minRating, setMinRating, minRatingList } = useContext(MainContext)

    return (
        <main>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)} results{locationName}</h2>
            <div>
                {/* Sort only for attractions */}
                <SelectionField options={sortPlacesList} defaultValue={sortPlaces} handlerValue={setSortPlaces} />
                {/* min_rating only for attractions and restaurants */}
                <SelectionField options={minRatingList} defaultValue={minRating} handlerValue={setMinRating} />
            </div>
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