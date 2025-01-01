import { LOGO_URL } from "../../utils/constant";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


function HeaderComponent() {

    let btnName = "Login";
    console.log('header render on page load and on click of login button also')
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext)
    const {loggedInUser} = data;
    console.log(data)


//useeffect-after evry render of the componet,everytime header component render useEffect will be called if no dependency array [];
//dependency array(optional)-
    useEffect(()=>{
        console.log('useeffect called');
    },[])

    //local variable react will not able to track
    //whenever state variable change react will re-render the header component
    const [btnNameReact, setBtnNameReact] = useState("Login"); //special local variable

   

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-brown-100">
            <div className="logoContainer">
                <img className="w-28" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? " ✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link>Cart</Link>
                    </li>
                    <button className="login"
                        onClick={() => {
                            btnName = "Logout";
                            btnNameReact === 'Login' ? setBtnNameReact("Logout"):setBtnNameReact("Login");//update the value to logout and render header component once again initial ==login 
                            //console.log('btnName', btnNameReact);
                        } }
                    >
                        {btnNameReact}</button>
                        <li>
                            {loggedInUser}
                        </li>

                </ul>

            </div>
        </div>
    );
}

export default HeaderComponent;



