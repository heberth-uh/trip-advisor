export default function PlacesSkeleton() {
    const numCards = new Array(15).fill(1)
    return (
        <div className="pt-[60px] lg:pt-[100px] w-full h-screen overflow-hidden absolute top-0 left-0 z-0">
            <div className="px-4 pt-4 pb-16 mx-auto container">
                <div className="flex flex-col gap-4 animate-pulse">
                    <div id="title" className="bg-light-gray w-3/4 lg:w-[400px] h-4 xl:h-5 rounded-full"/>
                    <div id="buttons" className="flex gap-2 flex-wrap">
                        <div className="bg-light-gray w-40 h-6 lg:h-11 rounded-full"/>
                        <div className="bg-light-gray w-20 h-6 lg:h-11 rounded-full"/>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-6">
                        {
                            numCards.map((_, key) => (
                                <div key={key} className="flex gap-3 lg:gap-4">
                                    <div id="imageCard" className="flex gap-3 lg:gap-4 size-32 md:size-36 lg:size-44 xl:size-64 bg-light-gray rounded-lg sm:rounded-xl lg:rounded-2xl"/>
                                    <div className="flex flex-col justify-start gap-4 grow">
                                        <div id="stars" className="bg-light-gray w-32 h-3 xl:h-4 rounded-full"/>
                                        <div id="titlePlace" className="bg-light-gray w-4/5 md:w-1/2 lg:w-[240px] h-2 xl:h-4 rounded-full"/>
                                        <div className="flex flex-col justify-between grow">
                                            <div id="locationPlace" className="bg-light-gray w-1/2 h-2 xl:h-3 rounded-full"/>
                                            <div id="statusPlace" className="bg-light-gray w-20 h-3 xl:h-4 rounded-full"/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
