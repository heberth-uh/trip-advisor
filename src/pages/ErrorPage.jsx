import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <section>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText || error.message || error.data}</i>
            </p>
        </section >
    )
}