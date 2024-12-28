import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import CityCard from "./CityCard"

export default function PopularCities() {
    const { popularCities } = useContext(MainContext)
    return (
        <section className="px-4 md:px-0 mt-10 bg-lighter-gray">
            <div className="container py-8">
                <h2 className="text-xl font-semibold text-primary text-center pb-8">Popular Cities</h2>
                <div className="flex justify-start items-center gap-3 overflow-x-auto scrollbar-invisible">
                    {
                        popularCities.map( city => (
                            <CityCard key={city.id} city={city}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
