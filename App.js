
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

const resObj = {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
      {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
      },
      {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
      },
      {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
      },
      {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
      },
      {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
      }
    ],
    "restaurantCount": 142,
    "facetList": [
      {
        "label": "10 Mins Delivery",
        "id": "isRestaurantBolt",
        "selection": "SELECT_TYPE_SINGLESELECT",
        "facetInfo": [
          {
            "label": "10 Mins Delivery",
            "id": "isRestaurantBoltfacetquery0",
            "analytics": {
              
            },
            "openFilter": true
          }
        ],
        "viewType": "VIEW_TYPE_FLATTENED",
        "subLabel": "Filterby"
      },
      {
        "label": "Veg/Non-Veg",
        "id": "isVeg",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
          {
            "label": "Non Veg",
            "id": "isVegfacetquery0",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Pure Veg",
            "id": "isVegfacetquery1",
            "analytics": {
              
            },
            "openFilter": true
          }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
      },
      {
        "label": "Ratings",
        "id": "rating",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
          {
            "label": "Ratings",
            "id": "ratingfacetquery0",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Ratings 4.0+",
            "id": "ratingfacetquery1",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Ratings 4.5+",
            "id": "ratingfacetquery2",
            "analytics": {
              
            },
            "openFilter": true
          }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
      },
      {
        "label": "Delivery Time",
        "id": "deliveryTime",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
          {
            "label": "Less than 30 mins",
            "id": "deliveryTimefacetquery0",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Less than 45 mins",
            "id": "deliveryTimefacetquery1",
            "analytics": {
              
            },
            "openFilter": true
          }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
      },
      {
        "label": "Cost For Two",
        "id": "costForTwo",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
          {
            "label": "Less than Rs. 300",
            "id": "costForTwofacetquery0",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Rs.300 - Rs.600",
            "id": "costForTwofacetquery1",
            "analytics": {
              
            },
            "openFilter": true
          },
          {
            "label": "Greater than Rs. 600",
            "id": "costForTwofacetquery2",
            "analytics": {
              
            },
            "openFilter": true
          }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
      }
    ]
  }

const styleCard ={
    backgroundColor:'#f0f0f0'
}


const Body =()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                    <RestaurantCard resData ={resObj}/>
                    {/* // resName="Meghana Foods"
                    // cuisins="Biryani, North Indian ,Asian"
                    /> */}
                   
                    


            </div>
        </div>
    )
}

const RestaurantCard = (props)=>{
    console.log(props)

    const {resData} = props;
    console.log(resData)

//const {resName ,cusins} = props;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" alt="res-logo">
            </img>
            <h3>{resData.data.name}</h3>/
            <h3>{resData.data.cuisins}</h3>/

            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.costForTwo}</h4>
            <h4>{resData.data.deliveryTime}</h4>

            {/* <h3>{resName}</h3>/
            <h4>{cuisins}</h4> */}
            <h4>4.4 Stars</h4>
            <h4>38 Minutes</h4>

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