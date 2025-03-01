import { useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <section className="flex-grow px-4 py-10 pb-16 mx-auto container">
                {
                    error.status &&
                    <h1 className="text-5xl font-semibold">
                        Error {error.status}
                    </h1>
                }
                <p className="my-5">Oops! an unexpected error has occurred</p>
                <div className="bg-red-100 p-3 mt-4 rounded-md">
                    <p className="font-light text-sm">{error.data || error.message }</p>
                </div>
            </section >
            <Footer/>
        </div>
    )
}