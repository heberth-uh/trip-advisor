import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
// Icon
import { FaStar } from "react-icons/fa";

export function TopAttractions() {
    const { popularAttractions } = useContext(MainContext)
    return (
        <section className="px-4 md:px-0 bg-white">
            <div className="container py-16 lg:py-16 md:px-10 mx-auto lg:w-3/4 xl:w-3/5 2xl:w-1/2">
                <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold text-primary text-center pb-6 lg:pb-8">
                    Top Attractions to visit
                </h2>
                <div className="flex items-start justify-start gap-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 overflow-x-auto scrollbar-invisible">
                    {
                        popularAttractions.map(attraction => (
                            <div key={attraction.location_id}
                                className="flex-none sflex sflex-col max-w-[200px] md:max-w-full">
                                <img src={attraction.photo?.images?.medium?.url} alt={attraction.photo?.caption}
                                    className="rounded-lg w-[200px] h-[150px] md:w-full md:h-[200px] lg:h-[150px]" />
                                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start mt-2">
                                    <p className="text-sm md:text-base font-semibold leading-noned">
                                        {attraction.name}
                                    </p>
                                    {attraction.rating && <div className="flex justify-center items-center gap-1">
                                        <span className="text-highlight"><FaStar/></span>
                                        <p className="text-sm md:text-base">{attraction.rating}</p>
                                    </div>}
                                </div>
                                <p className="text-xs md:text-sm font-normal">
                                    {attraction.location_string}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}