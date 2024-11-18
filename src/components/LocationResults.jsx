import { useURLParam } from "../hooks/useURLParam"
// Components
import LocationCard from "./LocationCard"
import Error from "./Error"
import NoResults from "./NoResults"
import SelectionField from "./widgets/SelectionField"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

function LocationList({ locations }) {
    const {sort, setSort, sortList} = useContext(MainContext)
    return (
        <div>
            <div>
                <SelectionField options={sortList} defaultValue={sort} handlerValue={setSort} />
            </div>
            <section>
                {locations.map(({ result_object }) => (
                    <LocationCard location={result_object} key={result_object.location_id} />
                ))}
            </section>
        </div>
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
                    : !isFirstSearch.current && <NoResults message={message} />
            }
        </section>
    )
}
