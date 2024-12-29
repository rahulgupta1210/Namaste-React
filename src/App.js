
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'));

const About = lazy(() => import('./components/About'));


const Applayout = () => {
    console.log('Virtual DOOM e.g', <Body />)//normal js obj

    return <div className="app">
        <HeaderComponent />
        <Outlet /> 
    </div>;
}

//   {/**if path = / */}
//   <Body />
//   {/**if path = /about */}
//   <About/>
//   {/**if path = /contact */}
//   <Contact/>

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact Us />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);
