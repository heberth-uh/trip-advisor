import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MainContext } from "../context/MainContext"
// Components
import PlaceCard from "./PlaceCard"
import Error from "./Error"
import NoResults from "./NoResults"
import Dropdown from "./common/Dropdown"

function PlacesList({ places }) {
    const params = useParams()
    const type = params.type
    const ancestor = places[0].ancestors ? places[0].ancestors[0].name : places[0].location_string
    const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1)

    const { sortPlaces, setSortPlaces, sortPlacesList, minRating, setMinRating, minRatingList } = useContext(MainContext)

    return (
        <>
            <div className="flex flex-col gap-y-3 mb-4">
                <h1 className="text-lg font-semibold">
                    {typeFormatted} results {ancestor && <span> in <span className="text-primary">{ancestor}</span></span>}
                </h1>

                <div className="flex gap-2 flex-wrap">
                    {/* Sort only for attractions */}
                    <Dropdown options={sortPlacesList} defaultValue={sortPlaces} handlerValue={setSortPlaces} />
                    {/* min_rating only for attractions and restaurants */}
                    <Dropdown options={minRatingList} defaultValue={minRating} handlerValue={setMinRating} />
                </div>
            </div>
            <section className="flex flex-col gap-5 lg:gap-6">
                {places.map((place, key) => <PlaceCard key={key} place={place} />)}
            </section>
        </>
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
