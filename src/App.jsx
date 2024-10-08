import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContext } from "./context/MainContext";
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage"

export default function App() {
    const { type } = useContext(MainContext)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: `/:type/results/location/:locationId`,
            element: <PlacesPage />
        },
        {
            path: `/${type}/get-details/:placeId`,
            element: <PlaceDetailsPage />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}
