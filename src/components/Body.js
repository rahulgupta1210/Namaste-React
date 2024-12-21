import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

import { useState } from "react";
import { useEffect } from "react";
const Body = () => {

    useEffect(() => {
        console.log('useeffect will render after body render');
        fetchData();
    }, [])


    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.902157887494267&lng=77.70266828616035&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
        const json = await data.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards);

        //setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

   
    


    console.log('body rendered')


    //once body component render then useEffect hook will be called after component has been rendered.

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
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);//whatever we pass will be the initial value



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
                        console.log('listOfRestaurants', listOfRestaurants)
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