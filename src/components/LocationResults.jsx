import LocationCard from "./LocationCard"

function NoLocationResult({ searchString }) {
    return (
        <div>
            No se encontraron resultados para "<i>{searchString}</i>"
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

export function LocationResults({ searchString, locations, isFirstSearch, error }) {
    return (
        <section>
            {
                error && <div><i>{error}</i></div>
            }
            {
                locations?.length > 0
                ? <LocationList locations={locations} />
                : isFirstSearch.current
                    ? ''
                    : <NoLocationResult searchString={searchString} />
            }
        </section>
    )
}
