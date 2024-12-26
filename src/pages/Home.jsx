import { useLocations } from '../hooks/useLocation.js'
// Components
import Navbar from '../components/Navbar.jsx'
import { LocationResults } from '../components/LocationResults.jsx'
import SearchForm from '../components/SearchForm.jsx'
import { useState } from 'react'
import { useURLParam } from '../hooks/useURLParam.js'

export default function Home() {
    const searchParam = useURLParam('search')
    const [searchString, setSearchString] = useState(searchParam)
    const { locations, searchLocations, isLoading, isFirstSearch, error } = useLocations(searchString)

    return (
        <>
            <Navbar />
            <SearchForm
                searchString={searchString}
                setSearchString={setSearchString}
                searchLocations={searchLocations}
                isLoading={isLoading}
            />
            <main>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : <LocationResults
                            locations={locations}
                            isFirstSearch={isFirstSearch}
                            error={error}
                        />
                }
            </main>
        </>
    )
}