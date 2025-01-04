
import React, { lazy, Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import('./components/Grocery'));

const About = lazy(() => import('./components/About'));


const Applayout = () => {
    console.log('Virtual DOOM e.g', <Body />)//normal js obj

    //authentication
    const [userName,setUserName] = useState();

    useEffect(()=>{
        //make api call and send username and pwd
        const data = {
            name:'rahul gupta'
        };
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
            <div className="app">
                <HeaderComponent />
                <Outlet />
            </div>;
        </UserContext.Provider>
        </Provider>


    );
};

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
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<Applayout />);

root.render(<RouterProvider router={appRouter} />);
