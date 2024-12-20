
import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
console.log('Virtual DOOM e.g',<Body/>)//normal js obj

    return <div className="app">
        <HeaderComponent />
        <Body />


    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout />);