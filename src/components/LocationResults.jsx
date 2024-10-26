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

export default function LocationResults({ searchString, locations, isLoading, error }) {
    return (
        <section>
            {
                isLoading && <div>Loading...</div>
            }
            {
                error && <div><i>{error}</i></div>
            }
            {
                locations?.length > 0
                ? <LocationList locations={locations}/>
                : <NoLocationResult searchString={searchString} />
            }
        </section>
    )
}
