import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import VacationRentals from "./pages/VacationRentals";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/location/:locationId',
        element: <VacationRentals/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}
