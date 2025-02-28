import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
// Media
import curveSvg from "../../../public/curve.svg"
import picture1 from "../../../public/hero-pic1.jpg"
import picture2 from "../../../public/hero-pic2.jpg"
import picture3 from "../../../public/hero-pic3.jpg"
import picture4 from "../../../public/hero-pic4.jpg"
// Icons
import { FaPaperPlane } from "react-icons/fa";
// Components
import Button from "../common/Button"

export default function Hero() {
    const { searchInputRef, scrollToElement } = useContext(MainContext)

    const handleStart = e => {
        e.preventDefault()
        searchInputRef?.current.focus()
        // Scroll to Search
        setTimeout(()=> scrollToElement(560, searchInputRef), 100)
    }
    return (
        <section className="bg-hero lg:bg-hero-desktop bg-center bg-cover bg-no-repeat dh-[90vh]">
            <div className="px-4 py-10 pb-16 mx-auto container">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center gap-y-5">
                        <h2 className="text-2xl lg:text-5xl text-center font-semibold text-dark drop-shadow-xl">
                            Discover your next adventure
                        </h2>
                        <p className="text-black font-light text-center lg:mx-10">
                            Find the best places to visit, explore hidden gems, and experience unforgettable moments
                        </p>
                        <div className="hidden md:flex justify-center items-start my-1">
                            <img src={curveSvg} className="w-60 lg:w-80" aria-hidden/>
                            <span className="text-[30px] animate-float">
                                <FaPaperPlane/>
                            </span>
                        </div>
                        <div className="mx-auto">
                            <Button bg={'dark'} handleOnclick={handleStart}>
                                Start
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 lg:grid-cols-8 gap-5 min-w-[320px] w-full">
                        <div className="h-[200px] sm:h-[300px] lg:h-[400px] col-span-2 sm:col-span-1 lg:sm:col-span-3 rounded-tr-full rounded-b-full hover:transition-all hover:translate-x-2 hover:translate-y-2 ease-in-out hover:duration-500 duration-500 overflow-hidden">
                            <img src={picture4} className="w-full h-full object-cover object-center bg-coverbg-centerbg-no-repeat" alt="vacation picture"/>
                        </div>
                        <div className="h-[200px] sm:h-[300px] lg:h-[400px] col-span-2 sm:col-span-3 lg:sm:col-span-5 rounded-t-full rounded-bl-full hover:transition-all hover:-translate-x-2 hover:translate-y-2 ease-in-out hover:duration-500 duration-500 overflow-hidden">
                            <img src={picture1} className="w-full h-full object-cover object-center bg-coverbg-centerbg-no-repeat" alt="vacation picture"/>
                        </div>
                        <div className="h-[100px] sm:h-[200px] lg:h-[300px] col-span-2 sm:col-span-3 lg:sm:col-span-5 rounded-t-full rounded-br-full hover:transition-all hover:translate-x-2 hover:-translate-y-2 ease-in-out hover:duration-500 duration-500 overflow-hidden">
                            <img src={picture3} className="w-full h-full object-cover object- bg-coverbg-centerbg-no-repeat" alt="vacation picture"/>
                        </div>
                        <div className="h-[100px] sm:h-[200px] lg:h-[300px] col-span-2 sm:col-span-1 lg:sm:col-span-3 rounded-tr-full rounded-b-full hover:transition-all hover:translate-x-2 hover:-translate-y-2 ease-in-out hover:duration-500 duration-500 overflow-hidden">
                            <img src={picture2} className="w-full h-full object-cover object- bg-coverbg-centerbg-no-repeat" alt="vacation picture"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}