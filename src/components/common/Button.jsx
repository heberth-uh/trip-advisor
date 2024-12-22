export default function Button({ children, handleOnclick, Icon }) {
    return (
        <button
            onClick={handleOnclick}
            className="flex items-center justify-center bg-secondary hover:bg-light-gray text-center text-sm font-medium uppercase rounded-full py-[6px] pl-4 pr-3">
            <span className="flex items-center justify-center gap-1">
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