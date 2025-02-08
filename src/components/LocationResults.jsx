import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { useURLParam } from "../hooks/useURLParam"
// Components
import LocationCard from "./LocationCard"
import Error from "./Error"
import NoResults from "./NoResults"
import Dropdown from "./common/Dropdown"

function LocationList({ locations, query }) {
    const { sort, setSort, sortList } = useContext(MainContext)
    return (
        <>
            <div className="flex flex-col gap-y-3 mb-4">
                <h1 className="text-lg font-semibold">
                    Results from <span className="italic font-bold">"{query}"</span>
                </h1>
                <Dropdown options={sortList} defaultValue={sort} handlerValue={setSort} />
            </div>
            <div className="flex flex-col gap-5">
                {locations.map(({ result_object }) => (
                    <LocationCard location={result_object} key={result_object.location_id} />
                ))}
            </div>
        </>
    )
}

export function LocationResults({ locations, isFirstSearch, error }) {
    const searchParam = useURLParam('search')
    const message = `No results found for "${searchParam}"`
    return (
        <section className="px-4 pt-4 pb-16 mx-auto container">
            {
                error
                ? <Error showImage={false}>{error}</Error>
                : locations?.length > 0
                    ? <LocationList locations={locations} query={searchParam} />
                    : !isFirstSearch.current && <NoResults message={message} />
            }
        </section>
    )
}
