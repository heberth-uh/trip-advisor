import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import CityCard from "./CityCard"

export default function PopularCities() {
    const { popularCities } = useContext(MainContext)
    return (
        <section className="px-4 md:px-0 mt-10 bg-lighter-gray">
            <div className="container py-8 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">
                <h2 className="text-xl lg:text-[2rem] font-semibold text-primary text-center pb-8">
                    Popular Cities
                </h2>
                <div className="flex items-center justify-start gap-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 overflow-x-auto scrollbar-invisible">
                    {
                        popularCities.map(city => (
                            <CityCard key={city.id} city={city} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
