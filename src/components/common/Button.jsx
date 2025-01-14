export default function Button({ children, handleOnclick, Icon, bg }) {
    const bgs = bg == 'primary'
        ? 'bg-highlight hover:bg-highlight/90 text-black'
        : bg == 'dark'
            ? 'bg-black hover:bg-black/80 text-white'
            : 'bg-secondary hover:bg-light-gray text-black'
    return (
        <button
            onClick={handleOnclick}
            className={`relative flex-1 flex items-center justify-center text-center rounded-full py-[6px] lg:py-[10px] pl-4 pr-3 lg:pl-5 lg:pr-4 ${bgs}`}>
            <span className="flex items-center justify-center text-sm lg:text-base font-medium lg:font-semibold uppercase gap-1">
                {children}
                {
                    Icon &&
                    <span className="text-lg">
                        {<Icon />}
                    </span>
                }
            </span>
        </button>
    )
}