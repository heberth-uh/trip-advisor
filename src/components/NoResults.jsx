export default function NoResults({ query }) {
    return (
        <div>
            <h1 className="text-lg text-dark font-semibold">
                No results found for <span className="italic font-bold">"{query}"</span>
            </h1>
        </div>
    )
}