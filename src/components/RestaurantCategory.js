import ItemList from "./ItemList";
//import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex,dummy})=>{

    //const [showItems,setShowItems] = useState(false);

    const handleClick = ()=>{
        console.log('clicked')
        setShowIndex()
    }
    console.log('props',data)
    return (
        <div>
        {/** accordian header */}
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            </div>
        </div>
        
    )
}

export default RestaurantCategory;