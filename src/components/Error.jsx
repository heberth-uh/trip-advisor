import Heading3 from "./common/Heading3"
import errorImg from "../../public/error-preview.png"

export default function Error({ children, showImage=true }) {
    return (
        <div>
            <Heading3>Ops! Something went wrong</Heading3>
            <p className="mt-2 font-light text-sm">
                Unexpected Error, contact support.
            </p>
            <div className="bg-red-100 p-3 mt-4 rounded-md">
                <i className="font-light text-sm">
                    {children}
                </i>
            </div>
            {showImage &&
                <div className="my-2 flex justify-center">
                    <img src={errorImg} className="h-60 w-60" alt="Error illustration" />
                </div>
            }
        </div>
    )
}