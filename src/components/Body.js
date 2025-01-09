import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
//import resList from "../../utils/mockData";

import { useState } from "react";
import { useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);//whatever we pass will be the initial value
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);//whatever we pass will be the initial value

    const [searchText, setSearchtext] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(() => {
        console.log('useeffect will render after body render');
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.902157887494267&lng=77.70266828616035&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
        //const data = await fetch('data.cards[1].card.card.gridElements.infoWithStyle.restaurants[3].info')
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.data?.data?.cards);
        let dataToBeshown = []
        for (let i = 0; i < json.data.cards.length; i++) {
            if (json.data.cards[i].card.card.info) {
                dataToBeshown.push(json.data.cards[i].card.card)
            }
        }

        setListOfRestaurants(dataToBeshown);
        setFilteredRestaurants(dataToBeshown);
    };

    // if(listOfRestaurants?.length === 0){
    //     return <Shimmer/>;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You are offline</h1>

    }

    const {loggedInUser,setUserName} = useContext(UserContext);





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



    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 items-center">
                
                    <input data-testid="searchInput" type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchtext(e.target.value)
                    }} />
                    </div>
                   <div className="m-4 p-4 items-center">
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        //filter the restaurant cards and update the UI
                        //searchtext
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);

                    }}>
                        Search</button>
                </div>
                <div className="m-4 p-4 items-center">
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
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
            </div>
            User Name:<input className="border border-black" onChange={(e)=>setUserName(e.target.value)} value={loggedInUser}/>
            <div className="res-container flex flex-wrap">

                {filteredRestaurants.map((restaurant) => (
                    restaurant?.info?.id ? (
                        <RestaurantCardPromoted key={restaurant?.info?.id} resData={restaurant}/>
                     ) : (
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Body;