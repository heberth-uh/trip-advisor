import { useLocation } from "react-router-dom"
// Components
import LocationCard from "./LocationCard"
import Error from "./Error"
import NoResults from "./NoResults"

function LocationList({ locations }) {
    return (
        locations.map(({ result_object }) => (
            <LocationCard location={result_object} key={result_object.location_id} />
        ))
    )
}

export function LocationResults({ locations, isFirstSearch, error }) {
    const location = useLocation()
    const searchString = new URLSearchParams(location.search).get('search')
    const message = `No results found for "${searchString}"`
    return (
        <section>
            {
                error && <Error>{error}</Error>
            }
            {
                locations?.length > 0
                ? <LocationList locations={locations} />
                : !isFirstSearch.current && <NoResults message={message}/>
            }
        </section>
    )
}
