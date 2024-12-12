
import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent =()=>{
    return (
        <div className="header">
            <div className="logoContainer">
            <img className="img" src=""></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Cart</li>

                </ul>

            </div>
        </div>
    )
}



const Applayout =()=>{
    return <div className="app"> 
    <HeaderComponent/>
    
    
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Applayout);