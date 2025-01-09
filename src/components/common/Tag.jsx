export default function Tag({ children, bg }) {
    return (
        <div className={`px-2 py-1 rounded-md ${bg} text-xs font-normal leading-none`}>
            {children}
        </div>
    )
}
