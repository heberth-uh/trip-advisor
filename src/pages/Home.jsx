import { useState } from 'react'
// Hooks
import { useLocations } from '../hooks/useLocation.js'
import { useURLParam } from '../hooks/useURLParam.js'
// Components
import Navbar from '../components/Navbar.jsx'
import { LocationResults } from '../components/LocationResults.jsx'
import SearchForm from '../components/SearchForm.jsx'
import PopularCities from '../components/Home/PopularCities.jsx'
import { TopAttractions } from '../components/Home/TopAttractions.jsx'
import ResultsSkeleton from '../components/loaders/ResultsSkeleton.jsx'
import Hero from '../components/Home/Hero.jsx'
import Categories from '../components/Home/Categories.jsx'
import { Footer } from '../components/Footer.jsx'

export default function Home() {
    const searchParam = useURLParam('search')
    const [searchString, setSearchString] = useState(searchParam)
    const { locations, searchLocations, isLoading, isFirstSearch, error } = useLocations(searchString)

    return (
        <div>
            <Navbar />
            <main>
                <Hero/>
                <SearchForm
                    searchString={searchString}
                    setSearchString={setSearchString}
                    searchLocations={searchLocations}
                    isLoading={isLoading}
                    isFirstSearch={isFirstSearch}
                />
                {
                    isLoading
                        ? <ResultsSkeleton/>
                        : !isFirstSearch.current && <LocationResults
                            locations={locations}
                            isFirstSearch={isFirstSearch}
                            error={error}
                        />
                }
                <Categories/>
                <PopularCities/>
                <TopAttractions/>
            </main>
            <Footer/>
        </div>
    )
}