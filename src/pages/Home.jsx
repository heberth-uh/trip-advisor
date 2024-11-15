import { useLocations } from '../hooks/useLocation.js'
// Components
import Navbar from '../components/Navbar.jsx'
import { LocationResults } from '../components/LocationResults.jsx'
import SearchForm from '../components/SearchForm.jsx'
import { useState } from 'react'

export default function Home() {
    const [searchString, setSearchString] = useState('')
    const { locations, searchLocations, isLoading, isFirstSearch, error } = useLocations(searchString)

    return (
        <>
            <Navbar />
            <div>
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
            </div>
        </>
    )
}