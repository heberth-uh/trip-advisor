import { useURLParam } from "../hooks/useURLParam"
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
    const searchParam = useURLParam('search')
    const message = `No results found for "${searchParam}"`
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
