import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContext } from "./context/MainContext";
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AttractionsPage from "./pages/AttractionsPage";
import AttractionDetailsPage from "./pages/AttractionDetailsPage"

export default function App() {
    const { type } = useContext(MainContext)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: `/:type/results/location/:locationId`,
            element: <AttractionsPage />
        },
        {
            path: `/${type}/get-details/:placeId`,
            element: <AttractionDetailsPage />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}
