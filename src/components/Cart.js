import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart =()=>{

    const cartItems = useSelector((state)=>state.cart.items);
    console.log('cartItems',cartItems);

    const dispatch = useDispatch();

    const handleRemovalCart =()=>{
dispatch(clearCart());
    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-black text-white m-2 p-2 rounded-lg" 
            onClick={handleRemovalCart}
            >Clear My Cart</button>
            {cartItems.length === 0 && <p>Your cart is empty,Please Add items!!</p>}
            <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;