import { CDN_URL } from "../../utils/constant";

const ItemList = ({ items ,dummy}) => {
    console.log('items', items)
    console.log('dummy', dummy)

    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="text-bold p-2">{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-sx">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 mx-16 rounded-lg bg-black shadow-lg m-auto text-white"> Add +</button>
                                </div>
                                <img src={CDN_URL + item.card.info.imageId} />
                            
                        </div>
                        </div>
                    );

            })}
        </div>
    );
};

export default ItemList;