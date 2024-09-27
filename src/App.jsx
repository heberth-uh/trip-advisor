import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AttractionsPage from "./pages/AttractionsPage";
import AttractionDetailPage from "./pages/AttractionDetailPage"

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
        element: <AttractionDetailPage/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
