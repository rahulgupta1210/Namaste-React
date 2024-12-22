import { CDN_URL } from "../../utils/constant";

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = (props) => {
    const { resData } = props;
   // console.log('abcd', resData)
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    CDN_URL + cloudinaryImageId}
            >
            </img>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;