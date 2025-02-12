export default function PlaceDetailsSkeleton() {
    return (
        <div className="flex flex-col gap-10 animate-pulse">
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2">

                <div className="lg:basis-full flex flex-col gap-y-3 lg:flex-row lg:justify-between mb-2">
                    <div className="flex justify-between items-center flex-wrap gap-y-1 gap-x-3">
                        <div id="title" className="bg-light-gray w-24 h-4 rounded-full">title</div>
                        <div id="statusPlace" className="bg-light-gray w-28 h-4 rounded-full">status</div>
                        <div id="rankingTextDesktop" className="bg-light-gray w-60 h-3 rounded-full hidden lg:block">ranking</div>
                    </div>
                    <div className="flex justify-between items-center flex-wrap gap-y-1">
                        <div id="starsRating" className="bg-light-gray w-28 h-3 rounded-full">stars</div>
                        <div id="rankingText" className="bg-light-gray w-60 h-3 rounded-full lg:hidden">ranking</div>
                    </div>
                </div>

                <div id="image" className="lg:basis-3/4 lg:pr-6">
                    <div className="bg-light-gray rounded-3xl w-full h-[400px] lg:h-[600px]"/>
                </div>

                <div className="lg:basis-1/4 flex flex-col gap-y-3 lg:gap-y-5">
                    <div id="detail1" className="bg-light-gray w-52 h-3 rounded-full slg:hidden lg:order-2 mb-4"/>
                    <div id="buttonTitle" className="bg-light-gray w-24 h-3 rounded-full"/>
                    <div className="flex gap-1 lg:flex-col lg:gap-y-3">
                        <div id="button1" className="bg-light-gray w-full h-10 rounded-full"></div>
                        <div id="button1" className="bg-light-gray w-full h-10 rounded-full"></div>
                    </div>
                    <div className="hidden lg:block order-last">
                        <div id="titleHours" className="bg-light-gray w-36 h-4 rounded-full mb-5"/>
                        <div id="hours" className="flex flex-col gap-y-4">
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                            <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 w-full mt-10">
                    <article className="lg:basis-3/5">
                        <div id="titleAbout" className="bg-light-gray w-24 h-4 rounded-full mb-3"/>
                        <div id="aboutDescription" className="bg-light-gray w-full h-32 rounded-lg"/>
                    </article>
                    <section className="lg:basis-2/5 lg:order-first">
                        <div id="title" className="bg-light-gray w-40 h-4 rounded-full mb-3"/>
                        <div className="flex flex-col gap-3 mt-3">
                            <div className="flex items-center gap-2">
                                <div className="bg-light-gray w-10 h-3 rounded-full"/>
                                <div className="bg-light-gray w-72 h-3 rounded-full"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-light-gray w-10 h-3 rounded-full"/>
                                <div className="bg-light-gray w-72 h-3 rounded-full"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-light-gray w-10 h-3 rounded-full"/>
                                <div className="bg-light-gray w-72 h-3 rounded-full"/>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="lg:hidden order-last mt-10">
                    <div id="titleHours" className="bg-light-gray w-36 h-4 rounded-full mb-5"/>
                    <div id="hours" className="flex flex-col gap-y-4">
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                        <div className="bg-light-gray w-60 h-3 rounded-full"/>
                    </div>
                </div>
                <section className="flex flex-col md:flex-row gap-10 mt-10 w-full">
                    <div className="lg:basis-2/5">
                        <div className="flex items-center gap-2">
                            <div className="bg-light-gray size-20 rounded-full"/>
                            <div className="flex flex-col justify-between gap-y-4">
                                <div id="starsRatingBig" className="bg-light-gray w-52 h-5 rounded-full">stars</div>
                                <div id="starsRatingBig" className="bg-light-gray w-2- h-3 rounded-full">stars</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-[8px]">
                            <div className="bg-light-gray w-72 h-2 rounded-full"/>
                            <div className="bg-light-gray w-72 h-2 rounded-full"/>
                            <div className="bg-light-gray w-72 h-2 rounded-full"/>
                            <div className="bg-light-gray w-72 h-2 rounded-full"/>
                            <div className="bg-light-gray w-72 h-2 rounded-full"/>
                        </div>
                    </div>
                    <section className="lg:basis-3/5">
                        <div className="flex flex-col gap-y-5 mt-4">
                            <div id="titleReviewSection" className="bg-light-gray w-24 h-4 rounded-full"/>
                            <div id="reviewCard" className="flex flex-col gap-y-5">
                                <div className="flex flex-col gap-y-3">
                                    <div id="titleReview" className="bg-light-gray w-40 h-4 rounded-lg"/>
                                    <div id="description" className="bg-light-gray w-full h-32 rounded-lg"/>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>

            </div>
        </div>
    )
}
