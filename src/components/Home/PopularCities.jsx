import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
// Components
import ImagePlace from "../ImagePlace"
// Icons
import { IoLocationSharp } from "react-icons/io5";

export default function PopularCities() {
    const { type, popularCities } = useContext(MainContext)
    return (
        <section className="px-4 md:px-0 bg-lighter-gray">
            <div className="container py-16 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">
                <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold text-primary text-center pb-6 lg:pb-8">
                    Popular Cities
                </h2>
                <div className="flex items-center justify-start gap-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 overflow-x-auto scrollbar-invisible">
                    {
                        popularCities.map(city => (
                            <ImagePlace key={city.id} location_id={city.location_id} url={`/${type}/results/location/${city.location_id}`} imageUrl={city.imageUrl}>
                                <p className="flex gap-1 pl-3 pr-2 pb-3 md:px-5 md:pb-5 text-white text-xs md:text-base font-medium">
                                    <span>
                                        <IoLocationSharp />
                                    </span>
                                    <span className="leading-none">
                                        {city.full_name}
                                    </span>
                                </p>
                            </ImagePlace>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
