export default function ProgressBar({rating, num_reviews}) {
    const width = Math.ceil(100 * parseInt(rating[1]) / parseInt(num_reviews))
    return (
        <div className="flex items-center gap-2 grow">
        <p className="text-xs text-end font-light w-2">
            {rating[0].split('_')[1]}
        </p>
        <div className="bg-[#EBEBEB] min-w-32 max-w-40 h-[4px] rounded-full overflow-hidden">
            <div className={`bg-[#C8C8C8] h-full`} style={{width: width + '%'}}/>
        </div>
    </div>
    )
}