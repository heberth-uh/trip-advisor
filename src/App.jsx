import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AttractionsPage from "./pages/AttractionsPage";
import AttractionDetailsPage from "./pages/AttractionDetailsPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/location/:locationId',
        element: <AttractionsPage/>
    },
    {
        path: '/attraction/:attractionId',
        element: <AttractionDetailsPage/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
