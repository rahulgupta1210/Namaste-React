
import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent =()=>{
    return (
        <div className="header">
            <div className="logoContainer">
            <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png"></img>
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


const Body =()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                    <RestaurantCard/>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{

    return (
        <div className="res-card">
            Meghna Foods
        </div>
    )
}



const Applayout =()=>{
    return <div className="app"> 
    <HeaderComponent/>
    <Body/>
    
    
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);