import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";


// chunkling
// code splitting
// dynamic bundling
// lazy loading
// onDemand Loading

// we are importing using lazy function, its create a different bundle file for grocery component
const Grocery = lazy( () => import("./components/Grocery") );

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: <Grocery/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)