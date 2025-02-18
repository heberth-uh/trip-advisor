// Components
import Button from "../../components/common/Button"
// Icons
import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-hero bg-centers bg-cover bg-no-repeat h-[90vh]">
            <div className="px-4 pt-4 pb-16 mx-auto container flex flex-col justify-around gap-y-12">

                <div className="flex flex-col justify-center gap-y-5">
                    <h2 class="text-3xl lg:text-5xl text-center font-semibold text-dark drop-shadow-xl">
                    {/* <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold text-primary text-center"> */}
                        Discover your next adventure
                    </h2>
                    <p className="text-black font-light text-center mx-10">
                        Find the best places to visit, explore hidden gems, and experience unforgettable moments
                    </p>
                    <div className="mx-auto">
                        <Button bg={'dark'} Icon={FaPaperPlane} >
                            Start
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="w-1/3s h-[400px] col-span-2 sm:col-span-1 bg-emerald-700 rounded-tr-full rounded-b-full"/>
                    <div className="w-2/3s h-[400px] col-span-2 sm:col-span-3 bg-emerald-700 rounded-t-full rounded-bl-full"/>
                    <div className="w-2/3s h-[200px] col-span-2 sm:col-span-3 bg-emerald-700 rounded-t-full rounded-br-full"/>
                    <div className="w-1/3s h-[200px] col-span-2 sm:col-span-1 bg-emerald-700 rounded-tr-full rounded-b-full"/>
                </div>

            </div>
        </section>
    )
}