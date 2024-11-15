import LocationCard from "./LocationCard"
import Error from "./Error"
import { useLocation, useSearchParams } from "react-router-dom"

function NoLocationResult() {
    const location = useLocation()
    const searchString = new URLSearchParams(location.search).get('search')
    return (
        <div>
            No results found for this "<i>{searchString}</i>"
        </div>
    )
}

function LocationList({ locations }) {
    return (
        locations.map(({ result_object }) => (
            <LocationCard location={result_object} key={result_object.location_id} />
        ))
    )
}

export function LocationResults({ locations, isFirstSearch, error }) {
    return (
        <section>
            {
                error && <Error>{error}</Error> // Must be a component
            }
            {
                locations?.length > 0
                ? <LocationList locations={locations} />
                : isFirstSearch.current
                    ? ''
                    : <NoLocationResult/>
            }
        </section>
    )
}
