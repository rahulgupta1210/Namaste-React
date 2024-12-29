
//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    console.log(resId);

    //const [resInfo, setResInfo] = useState(null);

    const resInfo = useRestaurantMenu();

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     // const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=31627&catalog_qa=undefined&query=Biryani&submitAction=ENTER');
    //     const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="425&catalog_qa=undefined&query=Biryani&submitAction=ENTER')
    //     const json = await response.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }

    if ((resInfo === null)) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //const {itemCards} = data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} --{costForTwo}</p>
            <ul>
                {itemCards.map(
                    (item) => {
                        console.log(item.card.info.name);
                        return (
                            <li key={item.card.info.id}>{item.card.info.name} ----- {"Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;