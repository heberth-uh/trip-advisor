const reviewCardSkeleton = () => {
    return (
        <div id="reviewCard" className="flex flex-col gap-y-[10px]">
            <div className="flex items-center justify-between flex-wrap gap-y-2">
                <div className="CardHeader flex items-center gap-x-2">
                    <div id="avatar" className="bg-light-gray size-8 rounded-full"/>
                    <div id="username" className="bg-light-gray w-14 h-2 rounded-full"/>
                </div>
                <div id="starsRatingReview" className="bg-light-gray w-28 h-3 rounded-full"/>
            </div>

            <div id="CardBody">
                <div id="reviewTitle" className="bg-light-gray w-52 h-[10px] rounded-full mb-3"/>
                <div id="reviewDescription" className="bg-light-gray w-full h-20 rounded-lg"/>
            </div>

            <div id="CardFooter" className="flex items-center justify-between flex-wrap text-[#747474] text-sm font-light">
                <div id="likesCounter" className="bg-light-gray w-6 h-3 rounded-full"/>
                <div id="date" className="bg-light-gray w-28 h-2 rounded-full"/>
            </div>

        </div>
    )
}
export default function PlaceDetailsSkeleton() {
    return (
        <div className="pt-[60px] lg:pt-[100px] w-full h-screen overflow-hidden absolute top-0 left-0 z-0">
            <div className="flex flex-col gap-10 animate-pulse px-4 pt-4 pb-16 mx-auto container">
                <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2">

                    <div className="lg:basis-full flex flex-col gap-y-3 lg:flex-row lg:justify-between mb-2">
                        <div className="flex justify-between items-center flex-wrap gap-y-1 gap-x-3">
                            <div id="title" className="bg-light-gray w-24 h-4 rounded-full"/>
                            <div id="statusPlace" className="bg-light-gray w-28 h-4 rounded-full"/>
                            <div id="rankingTextDesktop" className="bg-light-gray w-60 h-3 rounded-full hidden lg:block"/>
                        </div>
                        <div className="flex justify-between items-center flex-wrap gap-y-1">
                            <div id="starsRating" className="bg-light-gray w-28 h-3 rounded-full"/>
                            <div id="rankingText" className="bg-light-gray w-60 h-3 rounded-full lg:hidden"/>
                        </div>
                    </div>

                    <div id="image" className="lg:basis-3/4 lg:pr-6">
                        <div className="bg-light-gray rounded-3xl w-full h-[250px] md:h-[400px] lg:h-[600px]"/>
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
                    </div>
                    <section className="reviewsSection flex flex-col md:flex-row gap-10 mt-10 w-full">
                        <div className="histogramRating lg:basis-2/5 flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="bg-light-gray size-14 rounded-full"/>
                                <div className="flex flex-col justify-between gap-y-4">
                                    <div id="starsRatingBig" className="bg-light-gray w-40 h-5 rounded-full"/>
                                    <div id="starsRatingBig" className="bg-light-gray w-20 h-2 rounded-full"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="bg-light-gray min-w-32 max-w-40 h-[6px] rounded-full"/>
                                <div className="bg-light-gray min-w-32 max-w-40 h-[6px] rounded-full"/>
                                <div className="bg-light-gray min-w-32 max-w-40 h-[6px] rounded-full"/>
                                <div className="bg-light-gray min-w-32 max-w-40 h-[6px] rounded-full"/>
                                <div className="bg-light-gray min-w-32 max-w-40 h-[6px] rounded-full"/>
                            </div>
                        </div>
                        <section className="reviewsList lg:basis-3/5 w-full">
                            <div className="flex flex-col gap-y-5">
                                <div id="titleReviewSection" className="bg-light-gray w-28 h-4 rounded-full"/>
                                {reviewCardSkeleton()}
                                {reviewCardSkeleton()}
                                {reviewCardSkeleton()}
                            </div>
                        </section>

                    </section>

                </div>
            </div>
        </div>
    )
}
