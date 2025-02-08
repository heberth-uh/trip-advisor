export default function ResultsSkeleton() {
    const numCards = new Array(3).fill(1)
    return (
        <div className="flex flex-col gap-5 px-4 pt-4 pb-16 mx-auto container">
            {
                numCards.map((_, key) => (
                    <div key={key} className="flex gap-3 lg:gap-4 animate-pulse">
                        <div className="flex gap-3 lg:gap-4 size-32 bg-light-gray rounded-lg sm:rounded-xl lg:rounded-2xl"/>
                        <div className="flex flex-col justify-start gap-4 grow">
                            <div className="bg-light-gray w-full h-3 rounded-lg"/>
                            <div className="bg-light-gray w-full h-2 rounded-lg"/>
                            <div className="flex flex-col justify-between grow">
                                <div className="bg-light-gray w-1/2 h-2 rounded-lg"/>
                                <div className="bg-light-gray w-1/5 h-2 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
