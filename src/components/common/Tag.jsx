export default function Tag({ children, bg='bg-secondary' }) {
    return (
        <div className={`px-2 py-1 xl:py-[2px] rounded-md ${bg} text-xs xl:text-sm font-normal leading-none`}>
            {children}
        </div>
    )
}
