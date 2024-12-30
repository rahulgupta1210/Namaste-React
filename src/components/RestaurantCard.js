import { CDN_URL } from "../../utils/constant";

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = (props) => {
    const { resData } = props;
   // console.log('abcd', resData)
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;

    return (
        <div className="m-4 p-4 w-[270px] h-130 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-90">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={
                    CDN_URL + cloudinaryImageId}
            >
            </img>
            <h3 className="font-bold py-4 text-l">{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

//Higher order componet
//input ->restaurant card = --o/p-->restaurant card promoted flag true

export const withPromotedLabel = (RestaurantCard) => {
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;