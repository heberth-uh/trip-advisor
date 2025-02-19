// Components
import Button from "../../components/common/Button"
// Icons
import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-hero bg-centers bg-cover bg-no-repeat h-[90vh]">
            <div className="px-4 py-10 pb-16 mx-auto container">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center gap-y-5">
                        <h2 class="text-3xl lg:text-5xl text-center font-semibold text-dark drop-shadow-xl">
                            Discover your next adventure
                        </h2>
                        <p className="text-black font-light text-center mx-10">
                            Find the best places to visit, explore hidden gems, and experience unforgettable moments
                        </p>
                        <div className="mx-auto">
                            <a href="#searchSection" className="flex justify-center items-center gap-[6px] py-[6px] lg:py-[10px] pl-4 pr-3 lg:pl-5 lg:pr-4 bg-black hover:bg-primary text-white hover:text-black text-sm lg:text-base font-medium lg:font-semibold rounded-full uppercase">
                                Start
                                <FaPaperPlane/>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 lg:grid-cols-8 gap-5 min-w-[320px] w-full">
                        <div className="h-[300px] lg:h-[400px] col-span-2 sm:col-span-1 lg:sm:col-span-3 bg-emerald-700 rounded-tr-full rounded-b-full hover:transition-all hover:translate-x-2 hover:translate-y-2 ease-in-out hover:duration-500 duration-500"/>
                        <div className="h-[300px] lg:h-[400px] col-span-2 sm:col-span-3 lg:sm:col-span-5 bg-emerald-700 rounded-t-full rounded-bl-full hover:transition-all hover:-translate-x-2 hover:translate-y-2 ease-in-out hover:duration-500 duration-500"/>
                        <div className="h-[200px] lg:h-[300px] col-span-2 sm:col-span-3 lg:sm:col-span-5 bg-emerald-700 rounded-t-full rounded-br-full hover:transition-all hover:translate-x-2 hover:-translate-y-2 ease-in-out hover:duration-500 duration-500"/>
                        <div className="h-[200px] lg:h-[300px] col-span-2 sm:col-span-1 lg:sm:col-span-3 bg-emerald-700 rounded-tr-full rounded-b-full hover:transition-all hover:translate-x-2 hover:-translate-y-2 ease-in-out hover:duration-500 duration-500"/>
                    </div>
                </div>

            </div>
        </section>
    )
}