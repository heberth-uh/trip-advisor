export default function Heading1({ children, color='text-primary' }) {
    return (
        <h2 className={`text-xl md:text-2xl lg:text-[2rem] font-semibold ${color} text-center pb-6 lg:pb-8`}>
            {children}
        </h2>
    )
}
