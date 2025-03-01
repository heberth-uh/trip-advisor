import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Styles
import './App.css'
// Components
import Home from "./pages/Home";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage"
import ErrorPage from "./pages/ErrorPage";

const typeLoader = ({ params }) => {
    const validTypes = ['attractions', 'restaurants'];
    if (!validTypes.includes(params.type)) {
        throw new Response("Not Found", { status: 404 });
    }
    return params;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: `/:type/results/location/:locationId`,
        element: <PlacesPage />,
        errorElement: <ErrorPage/>,
        loader: typeLoader
    },
    {
        path: `/:type/get-details/:placeId`,
        element: <PlaceDetailsPage />,
        errorElement: <ErrorPage/>,
        loader: typeLoader
    }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
