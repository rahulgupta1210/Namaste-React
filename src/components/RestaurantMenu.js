
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
//import useRestaurantMenu from "../../utils/useRestaurantMenu";
//import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    console.log(resId);

    const dummy = "Dummy data";

    const [resInfo, setResInfo] = useState(null);

    const [showIndex,setShowIndex] = useState(null)

    //const resInfo = useRestaurantMenu();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=31627&catalog_qa=undefined&query=Biryani&submitAction=ENTER');
        //const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="425&catalog_qa=undefined&query=Biryani&submitAction=ENTER')
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
    }

    if ((resInfo === null)) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //const {itemCards} = data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.['card']?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);
    // console.log(itemCards);


    return (
        <div className="text-center" data-testid="foodItems">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} --{costForTwo}</p>
            {categories.map((category,index) => (
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ?true :false}
                setShowIndex = {()=>setShowIndex(index)}
                dummy ={dummy}
                 />
            ))}
            
        </div>
    )
}

export default RestaurantMenu;