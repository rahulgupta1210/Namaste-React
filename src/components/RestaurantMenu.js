
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu =()=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=31627&catalog_qa=undefined&query=Biryani&submitAction=ENTER');
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
    }

    if( (resInfo === null)){
        return <Shimmer/> ;
    }

    const {name,cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} --{costForTwo}</p>
            <ul>
                <li>{itemCards[0].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet coke</li>

            </ul>
        </div>
    )
}

export default RestaurantMenu;