import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

import { useState } from "react";
const Body = () => {

    //local state variable 
    // let listOfRestaurants2 = [
    //     {
    //         "info": {
    //             "id": "41102",
    //             "name": "Hotel Empire",
    //             "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
    //             "locality": "Majestic",
    //             "areaName": "Majestic",
    //             "costForTwo": "₹450 for two",
    //             "cuisines": [
    //                 "Kebabs",
    //                 "Biryani"
    //             ],
    //             "avgRating": 4.3,
    //             "parentId": "475",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "14K+",
    //             "promoted": true,
    //         }
    //     }, {
    //         "info": {
    //             "id": "41103",
    //             "name": "Hotel New",
    //             "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
    //             "locality": "Majestic",
    //             "areaName": "Majestic",
    //             "costForTwo": "₹450 for two",
    //             "cuisines": [
    //                 "Kebabs",
    //                 "Biryani"
    //             ],
    //             "avgRating": 3.5,
    //             "parentId": "475",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "14K+",
    //             "promoted": true,
    //         }
    //     }
    // ];
    const [listOfRestaurants,setListOfRestaurants] = useState( resList);//whatever we pass will be the initial value

    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-button" 
                onClick={() => {
                    console.log('clicked');

                    const filteredListOfRestaurants = listOfRestaurants.filter(
                        (item) => item.info.avgRating > 4
                    )
                    setListOfRestaurants(filteredListOfRestaurants);
                    console.log('listOfRestaurants',listOfRestaurants)
                }}
                >
                    Top Rated Button</button>
            </div>
            <div className="res-container">

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;