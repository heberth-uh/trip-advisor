export default function Button({ children, handleOnclick, Icon }) {
    return (
        <button
            onClick={handleOnclick}
            className="flex items-center justify-center bg-secondary hover:bg-light-gray text-center rounded-full py-[6px] lg:py-[10px] pl-4 pr-3 lg:pl-5 lg:pr-4">
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